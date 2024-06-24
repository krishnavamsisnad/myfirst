import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    SinglepostComponent,
    EditpostComponent,
    AddpostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
