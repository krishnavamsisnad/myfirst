import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmploerComponent } from './emploer/emploer.component';
import { CustmerComponent } from './custmer/custmer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmploerComponent,
    CustmerComponent,
    AdminDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
