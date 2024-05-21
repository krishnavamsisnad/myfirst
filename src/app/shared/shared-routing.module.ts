import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './produts/produts.component';

const routes: Routes = [
  {path:"",component:ProdutsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
