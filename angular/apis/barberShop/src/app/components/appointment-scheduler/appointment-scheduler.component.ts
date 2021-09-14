import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  selectedDate: Date;
  selectedTime;
  bookedAppointments: any[];
  timeSlots: any[];
  month: Date[][];

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
    this.selectedTime = {};
    this.selectedDate = new Date();

    this.timeSlots = [
      {
        time: "11:00",
        pm: false,
        available: true
      }, {
        time: "11:30",
        pm: false,
        available: true
      }, {
        time: "12:00",
        pm: true,
        available: true
      }, {
        time: "12:30",
        pm: true,
        available: true
      }, {
        time: "1:00",
        pm: true,
        available: true
      }, {
        time: "1:30",
        pm: true,
        available: true
      }, {
        time: "2:00",
        pm: true,
        available: true
      }, {
        time: "2:30",
        pm: true,
        available: true
      }, {
        time: "3:00",
        pm: true,
        available: true
      }, {
        time: "3:30",
        pm: true,
        available: true
      }, {
        time: "4:00",
        pm: true,
        available: true
      }, {
        time: "4:30",
        pm: true,
        available: true
      }, {
        time: "5:00",
        pm: true,
        available: true
      }, {
        time: "5:30",
        pm: true,
        available: true
      }
    ];

    this.generateMonth();

    this.getDaysAppointments(this.selectedDate);
  }

  getDaysAppointments(date: Date) {
    // call service
    this.appointmentService.getAppointmentsByDate(date)
      .subscribe(
        data => {
          this.convertSQLDateTimeToJSDate(data);
          this.adjustTimeSlots();
        }, error => {
          if (error.status == 404) {
            // no biggie, don't sweat it
            this.bookedAppointments = [];
            this.adjustTimeSlots();
          } else {
            console.error("ERROR retrieving appointments:", error)
          }
        }
      );
  }

  newDateSelected(date, i) {

    date = new Date(date);
    // i is the index of the week clicked

    // if the date is not the same month, 
    if (date.getMonth() != this.selectedDate.getMonth()) {
      // adjust the 'month' array
      this.selectedDate = new Date(date);

      this.generateMonth();
    }
    this.selectedDate = new Date(date);

    this.selectedTime = {};
    this.getDaysAppointments(this.selectedDate);

  }

  convertSQLDateTimeToJSDate(data) {

    this.bookedAppointments = data.map(appointment => {
      let sqlTime = appointment.time;
      let t = sqlTime.split(/[-T:]/);
      let date = new Date(Number(t[0]), Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4]));
      date.setHours(date.getHours() - (date.getTimezoneOffset() / 60))

      appointment.time = date;

      return appointment;
    });

    console.log(this.bookedAppointments);

  }

  adjustTimeSlots() {

    timeLoop: for (let i = 0; i < this.timeSlots.length; i++) {
      let timeSlot = this.timeSlots[i];
      for (let appointment of this.bookedAppointments) {
        var hours = appointment.time.getHours();
        if (hours > 12) {
          hours -= 12;
        }
        var min = appointment.time.getMinutes();
        if (min < 10) {
          // add leading 0 to 0-9
          min = "0" + min;
        }
        let bookedTime = hours + ":" + min

        if (bookedTime == timeSlot.time) {
          // already booked
          timeSlot.available = false;
          var dur = appointment.duration.split(":")
          if (Number(dur[0]) > 0 || Number(dur[1]) > 30) {
            // longer than 30 min
            this.timeSlots[++i].available = false;
          }

          continue timeLoop;
        }
      }
      timeSlot.available = true;
    }

    // look at all booked appointments
    // make time slots 'booked' if an appointment is at that time
  }

  generateMonth() {
    let first = new Date(this.selectedDate);
    first.setDate(1);
    first.setDate(first.getDate() - first.getDay())
    // now is the first sunday of the 'month'

    this.month = [];
    for (let i = 0; i < 5; i++) {
      //generate a week
      this.month.push([])
      for (let j = 0; j < 7; j++) {
        //generate a day
        this.month[i].push(new Date(first));
        this.month[i][j].setDate(this.month[i][j].getDate() + (i * 7) + j)
      }
    }
    // check if there is a 6th week
    let last = this.month[4][6];
    if (last.getDate() < 7) {
      // last day in the 'month' array
      // this means the last day of last month ended 
      // in the same week
    } else {
      // also check if last day in 'month' is actually the last day
      let tomorrow = new Date(last);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (tomorrow.getDate() != 1) {
        // there are still days to add to the calendar month
        //generate a week
        let i = 5;
        this.month.push([])
        for (let j = 0; j < 7; j++) {
          //generate a day
          this.month[i].push(new Date(first));
          this.month[i][j].setDate(this.month[i][j].getDate() + (i * 7) + j)
        }
      }
    }

  }

  adjustMonthWithArrows(monthOffset: number) {
    let newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    newDate.setMonth(newDate.getMonth() + monthOffset);
    let i;
    if (monthOffset == -1) {
      i = 0;
    } else {
      i = 4;
    }
    this.newDateSelected(newDate, i);
  }

  onTimeSlotClicked(timeSlot) {
    if (timeSlot.available) {
      this.selectedTime = timeSlot;
    }
  }

  onConfirmClicked() {
    let t = this.selectedTime.time.split(":");
    var h = this.selectedTime.pm && t[0] != 12 ? Number(t[0]) + 12 : t[0];

    var offset = this.selectedDate.getTimezoneOffset() / 60;
    this.selectedDate.setHours(h - offset);
    this.selectedDate.setMinutes(t[1]);
    this.selectedDate.setSeconds(0);
    this.selectedDate.setMilliseconds(0);
    console.log(this.selectedDate);

    if (window.confirm("Confirm your appointment:" + this.selectedDate)) {
      this.appointmentService.postNewAppointment(this.selectedDate)
        .subscribe(
          data => {
            alert("Your appointment on " +
              this.selectedDate.getFullYear() + "/" +
              (this.selectedDate.getMonth() + 1) + "/" +
              this.selectedDate.getDate() +
              " at " + this.selectedTime.time +
              " was scheduled successfully")
          }, err => {
            console.error("ERROR booking appointment: ", err)
          }
        );
    }
  }

}
