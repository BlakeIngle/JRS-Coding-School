import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PepperAdderComponent } from './components/pepper-adder/pepper-adder.component';
import { PeppersListComponent } from './components/peppers-list/peppers-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'peppers', pathMatch: 'full'},
  { path: 'peppers', component: PeppersListComponent},
  { path: 'peppers/:id', component: PeppersListComponent},
  { path: 'add', component: PepperAdderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
