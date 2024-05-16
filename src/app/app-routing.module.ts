import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingsComponent } from './things/things.component';
import { CartComponent } from './cart/cart.component';
import { CountrysComponent } from './countrys/countrys.component';
import { CountrydataComponent } from './countrydata/countrydata.component';
import { BuynowComponent } from './buynow/buynow.component';

const routes: Routes = [
  {
    path:"products",
    component:ThingsComponent
  },
  {
    path:"cards/:id",
    component:CartComponent
  },{
    path:"countrys",
    component:CountrysComponent
  },
  {
    path:"countrydata/:cname",
    component:CountrydataComponent
  },
  {
    path:'buynow',
    component:BuynowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
