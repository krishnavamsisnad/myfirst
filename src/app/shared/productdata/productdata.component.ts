import { Component } from '@angular/core';
import { ProductapiService } from '../productapi.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  data:any
userdata:any
formdata!:FormGroup
  constructor(public api:ProductapiService,public r:Router,public http:HttpClient,public form:FormBuilder){}
ngOnInit(){
  this.formdata=this.form.group({
    id:[''],
    title:[''],
    image:[''],
    price:['']

  })
  this.getallproducts()
this.http.get('http://localhost:3000/singin').subscribe((res)=>{
  console.log(res)
  this.userdata=res
})
}

getallproducts(){
  this.api.getproducts().subscribe((res)=>{
    this.data=res

  })
}

delet(id:any){
  alert("data deleted")
this.api.deteleapi(id).subscribe((res)=>{
  console.log(res)
  this.getallproducts()
})
}
add(){
this.r.navigateByUrl('/addproduct')
}

edit(p:any){
  this.formdata.controls['id'].setValue(p.id)
  this.formdata.controls['title'].setValue(p.title)
    this.formdata.controls['image'].setValue(p.image)
    this.formdata.controls['price'].setValue(p.price)
}
update(){
  
}

}
