import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProdutsComponent } from './produts/produts.component';
import { FormsModule } from '@angular/forms';
import { ProductdataComponent } from './productdata/productdata.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductsComponent } from './addproducts/addproducts.component';


@NgModule({
  declarations: [
    ProdutsComponent,
    ProductdataComponent,
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
