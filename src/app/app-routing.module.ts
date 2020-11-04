import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

const routes: Routes = [
  {
    path: 'dashboard', component:DashbaordComponent 
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
