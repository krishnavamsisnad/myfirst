import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingsComponent } from './things/things.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"products",
    component:ThingsComponent
  },
  {
    path:"cards/:id",
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
