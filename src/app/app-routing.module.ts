import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashbaordComponent } from './admin/dashbaord/dashbaord.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: 'dashboard', component:DashbaordComponent 
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'my-profile', component: MyProfileComponent
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
