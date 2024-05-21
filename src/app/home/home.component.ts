import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public r:Router){}
 fromdata:any
sub(data:any){
  this.fromdata=data.value
  console.log(data.value)
  this.r.navigateByUrl('/productdata')
}
}
