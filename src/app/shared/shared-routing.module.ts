import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './produts/produts.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

const routes: Routes = [
  {path:"",component:ProdutsComponent},
  {path:'productdata',component:ProductdataComponent},
  {
    path:"addproduct",component:AddproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
