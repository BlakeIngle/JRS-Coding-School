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

  getBarbersAppointmentsByDate(id: number, date: Date) {
    return this.http.get(`${BASE_URL}/barbers/${id}/appointments/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
  }

  postNewAppointment(date: Date, barber: number, service: number) {
    return this.http.post(`${BASE_URL}/appointments`,
      { time: date, barber: barber, service: service });
  }
}
