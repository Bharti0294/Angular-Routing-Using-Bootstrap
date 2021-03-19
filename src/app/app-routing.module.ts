import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {ContactusComponent} from './contactus/contactus.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [

  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"info",
    component:InfoComponent
  },
  
  {
    path:"contactus",
    component:ContactusComponent
  },
  
  {
    path:"about",
    component:AboutComponent
  },
  
  {
    path:"profile",
    component:ProfileComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
