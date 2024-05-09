import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  people:any
students=[
  {
    name:"vamsi",
    age:23,
  collage:"sasi"
  },
  {
    name:"sai",
    age:23,
  collage:"manasa"
  }
]
abc(){
this.people.push(this.students)
}
}
