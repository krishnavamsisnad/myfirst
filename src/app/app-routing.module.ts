import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubDataComponent } from './data/sub-data/sub-data.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ProductdetailesComponent } from './data/productdetailes/productdetailes.component';

const routes: Routes = [
  {
    path:"data",
  component:TabledataComponent
  },
  {
    path:"product",
    component:SubDataComponent,
    children:[
      {
        path:`productdetails/:pname`,
        component:ProductdetailesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
