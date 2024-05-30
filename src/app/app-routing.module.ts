import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResigtertionComponent } from './resigtertion/resigtertion.component';
import { UserComponent } from './user/user.component';
import { ActivedashboardComponent } from './activedashboard/activedashboard.component';
import { DiactivedashboardComponent } from './diactivedashboard/diactivedashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:ResigtertionComponent},
  {path:"user",component:UserComponent},
  {path:"activedashboard",component:ActivedashboardComponent},
  {path:"diactivedboard",component:DiactivedashboardComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
