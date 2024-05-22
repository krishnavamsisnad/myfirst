import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  fromdata!:FormGroup
  constructor(public fr:FormBuilder,public http:HttpClient){}
  ngOnInit(){
   this.fromdata= this.fr.group({
    id:[''],
    title:[''],
    image:[''],
    price:['']
    })
  }
onsub(){
this.http.post('http://localhost:3000/products',this.fromdata.value).subscribe((res)=>{
  alert("succuesfuly added")
})
}
}
