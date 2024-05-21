import { Component } from '@angular/core';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employdata:any
  newemploymeid:any
  employnamne:any
  team:any
  phonenumber:any
  type:any
constructor (public emplo:EmployerService){}
ngOnInit(){
this.getallemplo()
}
getallemplo(){
  this.emplo.getemploer().subscribe({
    next:(data)=>{
      console.log(data)
    this.employdata=data
    }
  })
}
addnew(new:any){
  this.emplo.addemploy(new).subscribe((res)=>{
    console.log(res)
  })
}
}
