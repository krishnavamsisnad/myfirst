import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrysComponent } from './countrys/countrys.component';
import { ProductsComponent } from './products/products.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';

const routes: Routes = [
{
  path:"countrys",
  component:CountrysComponent
},
{
  path:`countrydetails/:name`,
  component:CountrydetailsComponent
},
{
  path:"products",
  component:ProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
