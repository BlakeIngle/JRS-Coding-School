import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PepperAppComponent } from './components/pepper-app/pepper-app.component';

const routes: Routes = [
  { path: "", component: PepperAppComponent },
  { path: "peppers", component: PepperAppComponent },
  { path: "peppers/:id", component: PepperAppComponent },
  { path: "peppers/color/:color", component: PepperAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
