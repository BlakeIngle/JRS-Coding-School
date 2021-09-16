import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service'; // barber shop

@Component({
  selector: 'appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  @Input() bookedAppointments: any[];
  /**
   * number: 0-24 the opening time (ex: 8.5 -> 8:30am)
   */
  @Input() open: number; // 'hh:mm'
  /**
   * number: 0-24 the closing time (ex: 17.5 -> 6:30pm)
   */
  @Input() close: number;
  /**
   * number: minutes between time slots (ex: 15 -> 15 min)
   */
  @Input() timeSlotInterval: number;
  /**
   * string to display as the header of the component. Default is "Select A Time"
   */
  @Input() header: string;

  @Output() newDateSelected = new EventEmitter<Date>();
  @Output() dateTimeConfimed = new EventEmitter<Date>();

  selectedDate: Date;
  today: Date;
  selectedTime: Date; // the actual date time object to work with
  timeSlots: any[];
  month: Date[][];

  constructor() { }

  ngOnInit(): void {
    this.selectedTime = null;
    this.selectedDate = new Date();
    this.today = new Date();

    this.generateTimeSlots();
    this.generateMonth();
  }

  ngOnChanges() {
    if (this.timeSlots) {
      this.adjustTimeSlots();
      this.selectedTime = null;
    }
  }

  onNewDateSelected(date, i) {
    if (date.getTime() < this.today.getTime()) {
      date = this.today;
    }

    date = new Date(date);
    // i is the index of the week clicked

    // if the date is not the same month, 
    if (date.getMonth() != this.selectedDate.getMonth()) {
      // adjust the 'month' array
      this.selectedDate = new Date(date);

      this.generateMonth();
    }
    this.selectedDate = new Date(date);

    this.selectedTime = null;
    this.newDateSelected.emit(this.selectedDate);
  }

  generateTimeSlots() {
    this.timeSlots = [];
    let time = this.open;

    while (time + (this.timeSlotInterval / 60) <= this.close) {
      let date = new Date(this.selectedDate);
      date.setHours(time);
      // time = 14.25
      date.setMinutes(time % 1 * 60);
      date.setSeconds(0);
      this.timeSlots.push(
        {
          time: date,
          pm: time >= 12,
          available: true
        }
      );
      time += this.timeSlotInterval / 60;

    }
  }

  adjustTimeSlots() {

    timeLoop: for (let i = 0; i < this.timeSlots.length; i++) {
      let timeSlot = this.timeSlots[i];

      timeSlot.time.setYear(this.selectedDate.getFullYear());
      timeSlot.time.setMonth(this.selectedDate.getMonth());
      timeSlot.time.setDate(this.selectedDate.getDate());

      for (let appointment of this.bookedAppointments) {

        if (appointment.time.getHours() == timeSlot.time.getHours()
          && appointment.time.getMinutes() == timeSlot.time.getMinutes()) {
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
    this.onNewDateSelected(newDate, i);
  }

  onTimeSlotClicked(timeSlot) {
    if (timeSlot.available) {
      this.selectedTime = timeSlot.time;
    }
  }

  onConfirmClicked() {
    if (window.confirm("Confirm your appointment:" + this.selectedTime)) {
      this.dateTimeConfimed.emit(this.selectedTime);
    }
  }

}
