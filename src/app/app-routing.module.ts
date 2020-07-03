import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AakarComponent } from './aakar/aakar.component';
import {AnkuranComponent } from './ankuran/ankuran.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'aakar',component:AakarComponent},
	{path:'ankuran',component:AnkuranComponent},
	{path:'team',component:TeamComponent},
	{path:'contact',component:ContactComponent},

	// {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
