import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepperAppComponent } from './components/pepper-app/pepper-app.component';
import { NewPepperFormComponent } from './components/new-pepper-form/new-pepper-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PepperAppComponent,
    NewPepperFormComponent
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
