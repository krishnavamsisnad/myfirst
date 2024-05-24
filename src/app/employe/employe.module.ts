import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { DetailesComponent } from './detailes/detailes.component';
import { SingupComponent } from './singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailesComponent,
    SingupComponent,
   
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class EmployeModule { }
