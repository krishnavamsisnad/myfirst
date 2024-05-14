import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="vamsi"
 presons:any=[]
  person:FormGroup;
  constructor(public ar:FormBuilder){
    this.person=this.ar.group({
      fname:["",[Validators.required,Validators.minLength(8)]],
      phone:[''],
      collage:['']

    })
  }

  abc(){
    this.presons.push(this.person.value)
  }

}
