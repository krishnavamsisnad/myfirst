import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  people:any
students=["vamsi"]
abc(){
this.students.push(this.people)
}
delet(i:any){
this.students.splice(i,1)
}
}
