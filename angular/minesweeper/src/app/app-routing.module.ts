import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

const routes: Routes = [
  {path: "", component: MinesweeperComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
