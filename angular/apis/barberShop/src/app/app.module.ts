import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarberShopAppComponent } from './components/barber-shop-app/barber-shop-app.component';
import { AppointmentSchedulerComponent } from './components/appointment-scheduler/appointment-scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    BarberShopAppComponent,
    AppointmentSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
