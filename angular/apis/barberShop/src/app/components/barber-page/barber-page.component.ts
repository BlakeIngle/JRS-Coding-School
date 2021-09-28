import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { BarberShopService } from 'src/app/services/barber-shop.service';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-barber-page',
  templateUrl: './barber-page.component.html',
  styleUrls: ['./barber-page.component.css']
})
export class BarberPageComponent implements OnInit {

  bookedAppointments: any[];
  barber: any;
  services: any[];
  serviceSelected = null;

  constructor(private appointmentService: AppointmentsService,
    private dateTimeService: DateTimeService,
    private barberShopService: BarberShopService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookedAppointments = [];
    this.barber = {};
    this.services = [];

    this.getBarber();
    this.getServices();
  }

  getBarber() {
    let id = this.route.snapshot.paramMap.get('id');

    this.barberShopService.getBarberById(id)
      .subscribe(data => {
        this.barber = data[0];
        this.getDaysAppointments(new Date());
      }, error => {
        console.error("ERROR retrieving barber:", error)
      });
  }

  getServices() {
    this.barberShopService.getServices()
      .subscribe(data => {
        this.services = data as any;
      }, error => {
        console.error("ERROR getting services:", error)
      });
  }

  getDaysAppointments(date: Date) {
    // call service
    this.appointmentService.getBarbersAppointmentsByDate(this.barber.id, date)
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
    if (!this.serviceSelected) {
      alert("You must select a service");
      return;
    }
    this.appointmentService.postNewAppointment(date, this.barber.id, this.serviceSelected)
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
}
