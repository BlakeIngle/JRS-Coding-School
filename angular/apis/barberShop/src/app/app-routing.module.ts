import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { BarberPageComponent } from './components/barber-page/barber-page.component';
import { BarberShopAppComponent } from './components/barber-shop-app/barber-shop-app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocationComponent } from './components/location/location.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';

const routes: Routes = [
  {
    path: "", component: BarberShopAppComponent, children: [
      {
        path: "", component: HomePageComponent, children: [
          { path: "locations", component: LocationsPageComponent },
          { path: "services", component: ServicesPageComponent },
          { path: "about", component: AboutUsPageComponent }
        ]
      },
      { path: "locations/:id", component: LocationComponent },
      { path: "barber/:id", component: BarberPageComponent }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
