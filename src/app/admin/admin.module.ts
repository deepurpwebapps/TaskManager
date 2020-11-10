import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';




@NgModule({
  declarations: [
    DashbaordComponent,
    AboutComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashbaordComponent, AboutComponent, MyProfileComponent]
})
export class AdminModule { }
