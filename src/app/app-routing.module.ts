import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'posts',component:PostlistComponent},
  {path:'post/add',component:AddpostComponent},
  {path:'edit/post/id',component:EditpostComponent},
  {path:'post/detailes/id',component:SinglepostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
