import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CovidDataTableComponent } from './covid-data-table/covid-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidDataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
