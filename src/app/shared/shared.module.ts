import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProdutsComponent } from './produts/produts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdataComponent } from './productdata/productdata.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SearchPipe } from './search.pipe';

import { EmploydashbordComponent } from './employdashbord/employdashbord.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';


@NgModule({
  declarations: [
    ProdutsComponent,
    ProductdataComponent,
    AddproductsComponent,
    SearchPipe,

    EmploydashbordComponent,
    ManagerdashboardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
