import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { StudentfromComponent } from './studentfrom/studentfrom.component';
import { EmployerComponent } from './employer/employer.component';
import { FromgroupComponent } from './fromgroup/fromgroup.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentfromComponent,
    EmployerComponent,
    FromgroupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
