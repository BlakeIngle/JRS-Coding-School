import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { BudgedItemListComponent } from './components/budged-item-list/budged-item-list.component';
import { BudgetItemCardComponent } from './components/budget-item-card/budget-item-card.component';
import { FormsModule } from '@angular/forms';
import { EditItemModalComponent } from './components/edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgedItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
