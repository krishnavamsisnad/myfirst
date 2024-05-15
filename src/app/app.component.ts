import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="vamsi"
  people:any
  person:FormGroup;
  constructor(public ar:FormBuilder){
    this.person=this.ar.group({
      fname:["",[Validators.required,Validators.minLength(4)]],
      phone:['',[Validators.required,Validators.email]],
      collage:['']

    })
  }

  abc(){
    console.log(this.person.value)
    this.people=this.person.value
  }

}
