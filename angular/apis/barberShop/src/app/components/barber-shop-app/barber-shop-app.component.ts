import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'barber-shop-app',
  templateUrl: './barber-shop-app.component.html',
  styleUrls: ['./barber-shop-app.component.css']
})
export class BarberShopAppComponent implements OnInit {

  bookedAppointments: any[];

  constructor(private appointmentService: AppointmentsService,
    private dateTimeService: DateTimeService) { }

  ngOnInit(): void {
    this.bookedAppointments = [];
    this.getDaysAppointments(new Date());
  }

  getDaysAppointments(date: Date) {
    // call service
    this.appointmentService.getAppointmentsByDate(date)
      .subscribe(
        data => {
          (data as any[]).forEach(appointment => {
            appointment.time = this.dateTimeService.convertSQLDateTimeToJSDate(appointment.time);
          });
          this.bookedAppointments = data as any[];
          console.log(this.bookedAppointments)
        }, error => {
          if (error.status == 404) {
            // no biggie, don't sweat it
            this.bookedAppointments = [];
          } else {
            console.error("ERROR retrieving appointments:", error)
          }
        }
      );
  }

  bookAppointment(date: Date) {
    this.appointmentService.postNewAppointment(date)
      .subscribe(
        data => {
          alert("Your appointment on " +
            date.getFullYear() + "/" +
            (date.getMonth() + 1) + "/" +
            date.getDate() +
            " at " + date.getHours() +
            ":" + date.getMinutes() +
            " was scheduled successfully.")
        }, err => {
          console.error("ERROR booking appointment: ", err)
        }
      );
  }

}
