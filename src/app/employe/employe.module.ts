import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { DetailesComponent } from './detailes/detailes.component';
import { SingupComponent } from './singup/singup.component';


@NgModule({
  declarations: [
    DetailesComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule
  ]
})
export class EmployeModule { }
