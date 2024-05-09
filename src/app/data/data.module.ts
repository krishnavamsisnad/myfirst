import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubDataComponent } from './sub-data/sub-data.component';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';



@NgModule({
  declarations: [
    SubDataComponent,
    SearchPipe,
    ProductdetailesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
exports:[SubDataComponent]
})
export class DataModule { }
