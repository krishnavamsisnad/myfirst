import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any=[
    {
    name:"vamsi",
    number:67987,
    email:"vamsi@12"
  },    {
    name:"sai",
    number:79089,
    email:"sai@12"
  },    {
    name:"kittu",
    number:9097,
    email:"kittu@12"
  },    {
    name:"hema",
    number:68979,
    email:"hema@12"
  },    {
    name:"pavan",
    number:67987,
    email:"pavan@12"
  }
]
key:string="name"
order:string="asc"


}
