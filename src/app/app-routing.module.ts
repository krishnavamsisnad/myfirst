import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProdutsComponent } from './produts/produts.component';

const routes: Routes = [
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"home",component:HomeComponent
  },{
    path:"product",component:ProdutsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
