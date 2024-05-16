import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnticationLayoutComponent } from './layout/antication-layout/antication-layout.component';
import { Anticationrouter } from './routing/antication-routing';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { Adimrouters } from './routing/admin-routing';

const routes: Routes = [
  {
    path:"",component:AnticationLayoutComponent,children:Anticationrouter
  },
 {

  path:'admin',component:AdminLayoutComponent,children:Adimrouters
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
