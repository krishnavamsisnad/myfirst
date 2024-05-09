import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { DataModule } from './data/data.module';
import { TabledataComponent } from './tabledata/tabledata.component';



@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    SearchPipe,
    TabledataComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
