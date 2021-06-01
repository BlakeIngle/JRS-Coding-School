import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeppersListComponent } from './components/peppers-list/peppers-list.component';
import { PepperCardComponent } from './components/pepper-card/pepper-card.component';
import { PepperAdderComponent } from './components/pepper-adder/pepper-adder.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PeppersListComponent,
    PepperCardComponent,
    PepperAdderComponent,
    AnimalListComponent,
    AnimalCardComponent,
    AnimalFormComponent,
    ConfirmDialogComponent
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
