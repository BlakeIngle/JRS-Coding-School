import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SuperListComponent } from './components/super-list/super-list.component';
import { SuperCardComponent } from './components/super-card/super-card.component';
import { NewSuperFormComponent } from './components/new-super-form/new-super-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SuperListComponent,
    SuperCardComponent,
    NewSuperFormComponent
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
