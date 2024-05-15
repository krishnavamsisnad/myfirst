import { Component } from '@angular/core';
import { CoutryapiService } from '../coutryapi.service';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css']
})
export class CountrysComponent {
  
constructor(public cs:CoutryapiService){}
country:any
error:any
ngOnInit(){
  this.cs.getcountry().subscribe((data)=>{
    console.log(data)
    this.country=data
  },(error)=>{
    this.error=error
  })
}
}
