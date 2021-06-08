import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalMainPageComponent } from './components/animal-main-page/animal-main-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: AnimalMainPageComponent},
  { path: "login", component: LoginComponent},
  
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
