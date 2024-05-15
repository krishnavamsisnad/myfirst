import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingsComponent } from './things/things.component';
import { CartComponent } from './cart/cart.component';
import { CountrysComponent } from './countrys/countrys.component';
import { CountrydataComponent } from './countrydata/countrydata.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
