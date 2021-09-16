import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { BarberShopService } from 'src/app/services/barber-shop.service';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'barber-shop-app',
  templateUrl: './barber-shop-app.component.html',
  styleUrls: ['./barber-shop-app.component.css']
})
export class BarberShopAppComponent implements OnInit {

  bookedAppointments: any[];
  locations: any[];

  showLocations: boolean;
  showServices: boolean;
  showAboutUs: boolean;

  constructor(private appointmentService: AppointmentsService,
    private dateTimeService: DateTimeService,
    private barberShopService: BarberShopService) { }

  ngOnInit(): void {
    this.bookedAppointments = [];
    this.locations = [];

    this.showLocations = false;
    this.showServices = false;
    this.showAboutUs = false;

    this.getDaysAppointments(new Date());
    this.barberShopService.getAllLocations()
      .subscribe(
        data => {
          this.locations = data as any[];
          console.log(this.locations)
        }, error => {
          console.error("ERROR retrieving locations:", error)
        }
      );
  }

  getDaysAppointments(date: Date) {
    // call service
    console.log(date);
    this.appointmentService.getAppointmentsByDate(date)
      .subscribe(
        data => {
          (data as any[]).forEach(appointment => {
            appointment.time = this.dateTimeService.convertSQLDateTimeToJSDate(appointment.time);
          });
          this.bookedAppointments = data as any[];
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
            " was scheduled successfully.");
          this.getDaysAppointments(date);
        }, err => {
          console.error("ERROR booking appointment: ", err)
        }
      );
  }

  onLocationsClicked() {
    this.showLocations = true;
  }
}
