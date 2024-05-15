import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrysComponent } from './countrys/countrys.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThingsComponent } from './things/things.component';
import { CartComponent } from './cart/cart.component';
import { CountrydataComponent } from './countrydata/countrydata.component';
import { ProductserachPipe } from './productserach.pipe';

@NgModule({
  declarations: [
    AppComponent,

    CountrysComponent,
      ThingsComponent,
      CartComponent,
      CountrydataComponent,
      ProductserachPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
