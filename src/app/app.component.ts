import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="welcome to snad";
  students=["vamsi","sai","kittu"]
  abc(){
    alert("hi")
  }
 employer=[
  {
    fristname:"vamsi",
    lastname:"nalluri",
    age:22
  },
  {
    fristname:"sai",
    lastname:"Epupagati",
    age:26
  },{
    fristname:"kittu",
    lastname:"nalluri",
    age:22
  },{
    fristname:"bhannu",
    lastname:"nalluri",
    age:22
  }
 ]
}
