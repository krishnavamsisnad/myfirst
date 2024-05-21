import { Component } from '@angular/core';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employdata:any
  employmeid:any
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
addnew(){
  let newemplo={
    "id":this.employmeid,
    "employname":this.employnamne,
    "team":this.team,
    "phonenumeber":this.phonenumber,
    "type":this.type
  }
  this.emplo.addemploy(newemplo).subscribe((res)=>{
    console.log(res)
    this.getallemplo()
  })
}
delet(id:any){
  this.emplo.deleteemploy(id).subscribe((res)=>{
    console.log(res)
    this.getallemplo()
  })
}
update(){
  
}
}
