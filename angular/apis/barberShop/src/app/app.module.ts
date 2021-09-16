import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarberShopAppComponent } from './components/barber-shop-app/barber-shop-app.component';
import { AppointmentSchedulerComponent } from './components/appointment-scheduler/appointment-scheduler.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BarberShopAppComponent,
    AppointmentSchedulerComponent,
    ServicesPageComponent,
    AboutUsPageComponent
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
