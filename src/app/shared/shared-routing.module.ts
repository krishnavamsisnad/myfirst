import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './produts/produts.component';
import { ProductdataComponent } from './productdata/productdata.component';

const routes: Routes = [
  {path:"",component:ProdutsComponent},
  {path:'productdata',component:ProductdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
