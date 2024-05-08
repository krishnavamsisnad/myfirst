import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubDataComponent } from './sub-data/sub-data.component';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubDataComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
exports:[SubDataComponent]
})
export class DataModule { }
