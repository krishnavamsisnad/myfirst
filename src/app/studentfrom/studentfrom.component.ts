import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentfrom',
  templateUrl: './studentfrom.component.html',
  styleUrls: ['./studentfrom.component.css']
})
export class StudentfromComponent {
 fristname=""

userfrom:any
  onsub(data:any){
console.log(data.value)
this.userfrom=data.value
  }

 
}
