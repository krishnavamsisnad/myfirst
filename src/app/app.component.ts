import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirst';
  fromdata:any
  onsubmit(from:NgForm){
    console.log(from.value)
    this.fromdata=from.value
  }
}
