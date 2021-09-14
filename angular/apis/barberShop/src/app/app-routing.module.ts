import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberShopAppComponent } from './components/barber-shop-app/barber-shop-app.component';

const routes: Routes = [
  { path: "", component: BarberShopAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
