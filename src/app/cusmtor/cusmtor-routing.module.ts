import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from '../employer/batch/batch.component';
import { SubCumsterComponent } from './sub-cumster/sub-cumster.component';
import { MalecustotComponent } from './malecustot/malecustot.component';

const routes: Routes = [
  {
    path:'',
    component:SubCumsterComponent
  },
  {
    path:"malecust",
    component:MalecustotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CusmtorRoutingModule { }
