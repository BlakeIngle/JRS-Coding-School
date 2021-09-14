import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { AnimationPageComponent } from './animation-page/animation-page.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesPageComponent,
    AnimationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
