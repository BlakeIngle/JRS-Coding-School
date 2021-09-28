import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpFormComponent } from './components/login/sign-up-form/sign-up-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageFormComponent,
    LoginFormComponent,
    LoginPageComponent,
    HomePageComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
