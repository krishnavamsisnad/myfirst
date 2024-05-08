import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any=[
    {
      id:1,
    name:"vamsi",
    number:67987,
    email:"vamsi@12"
  },    {
    id:2,
    name:"sai",
    number:79089,
    email:"sai@12"
  },    {
    id:3,
    name:"kittu",
    number:9097,
    email:"kittu@12"
  },    {
    id:4,
    name:"hema",
    number:68979,
    email:"hema@12"
  },    {
    id:5,
    name:"pavan",
    number:67987,
    email:"pavan@12"
  }
]
key:string="name"
order:string="asc"
see=""

name:any

setkey(k:any){
  if(this.key === k){
      return this.order = (this.order === "asc") ? "dec" : "asc";
  }
  
 else{
  return this.order="asc" ; this.key=k;
 
 } 
}

}
