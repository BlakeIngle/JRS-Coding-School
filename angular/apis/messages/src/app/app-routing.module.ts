import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { SignUpFormComponent } from './components/login/sign-up-form/sign-up-form.component';
import { ForceLoginGuard } from './guards/force-login.guard';

const routes: Routes = [
  { path: "", component: HomePageComponent, canActivate: [ForceLoginGuard] },
  {
    path: "login", component: LoginPageComponent, children: [
      { path: "", component: LoginFormComponent }
    ]
  },
  {
    path: "signup", component: LoginPageComponent, children: [
      { path: "", component: SignUpFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
