import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AnimalMainPageComponent } from './components/animal-main-page/animal-main-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    AnimalFormComponent,
    AnimalListComponent,
    ConfirmDialogComponent,
    AnimalMainPageComponent,
    LoginComponent
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
