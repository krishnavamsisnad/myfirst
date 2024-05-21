import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrysComponent } from './countrys/countrys.component';
import { ProductsComponent } from './products/products.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
{
  path:"countrys",
  component:CountrysComponent
},
{
  path:`countrydetails/:cname`,
  component:CountrydetailsComponent
},
{
  path:"products",
  component:ProductsComponent,
  children:[
    {
      path:"productdetailes/:id",
      component:ProductdetailesComponent
    }
  ]
},
{
  path:'book',component:BooksComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
