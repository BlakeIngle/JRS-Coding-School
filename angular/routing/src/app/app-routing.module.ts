import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationPageComponent } from './animation-page/animation-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: "movies", component: MoviesPageComponent },
  { path: "animations", component: AnimationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
