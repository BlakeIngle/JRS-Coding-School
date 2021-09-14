import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getAppointmentsByDate(date: Date) {
    return this.http.get(`${BASE_URL}/appointments/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
  }

  postNewAppointment(date: Date, barber?, service?) {
    console.log(date);
    return this.http.post(`${BASE_URL}/appointments`, { time: date, barber: 1, service: 1 });
  }
}
