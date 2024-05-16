import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:"employer",loadChildren:()=>import ('./employer/employer.module').then(x=>x.EmployerModule)
  },
  {
    path:"cusmtor",loadChildren:()=>import('./cusmtor/cusmtor.module').then(a=>a.CusmtorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
