import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { BarberShopAppComponent } from './components/barber-shop-app/barber-shop-app.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';

const routes: Routes = [
  {
    path: "", component: BarberShopAppComponent, children: [
      { path: "services", component: ServicesPageComponent },
      { path: "about", component: AboutUsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
