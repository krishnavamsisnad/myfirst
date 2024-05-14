import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountrysComponent } from './countrys/countrys.component';
import { ProductsComponent } from './products/products.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { TestService } from './test.service';
import { TextbigerPipe } from './textbiger.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountrysComponent,
    ProductsComponent,
    CountrydetailsComponent,
    ProductdetailesComponent,
    TextbigerPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule


  
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
