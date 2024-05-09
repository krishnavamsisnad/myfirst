import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubDataComponent } from './data/sub-data/sub-data.component';

const routes: Routes = [
  {
    path:"product",
    component:SubDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
