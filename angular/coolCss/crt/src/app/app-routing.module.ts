import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrtScreenComponent } from './components/crt-screen/crt-screen.component';

const routes: Routes = [
  { path: "", component: CrtScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
