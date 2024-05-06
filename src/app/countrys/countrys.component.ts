import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css']
})
export class CountrysComponent {
  countrys:any;
  isloading:boolean=true
  constructor(public cs:CountriesService){}
  ngOnInit(){
  this.cs.getAllcountrys().subscribe({
    next:(data)=>{
     this.countrys=data
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.isloading=false
    }
  })
  }
  
  abc(ob:any){
   return {cd: JSON.stringify(ob)}
  }
}
