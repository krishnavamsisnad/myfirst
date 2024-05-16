import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmploerComponent } from './emploer/emploer.component';
import { CustmerComponent } from './custmer/custmer.component';

const routes: Routes = [
  {
    path:"",component:AdminDashboardComponent
  },
  {
    path:"employer",component:EmploerComponent
  },
  {
    path:"custmer",component:CustmerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
