import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonMainPageComponent } from './components/dungeon-main-page/dungeon-main-page.component';

const routes: Routes = [
  {path: "", component: DungeonMainPageComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
