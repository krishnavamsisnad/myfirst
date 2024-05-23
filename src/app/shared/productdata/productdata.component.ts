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
  data:any={}
userdata:any
  see=''
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
  alert("Upadte sucessfully")
  this.data.id=this.formdata.value.id
  this.data.title=this.formdata.value.title
  this.data.image=this.formdata.value.image
  this.data.price=this.formdata.value.price
  console.log(this.data.id)
  console.log(this.data.title)

//   this.api.updateapi(this.data,this.data.id).subscribe((res)=>{
// console.log(res)


// let ref=document.getElementById('cancel')
// ref?.click()
// this.formdata.reset()
// this.getallproducts()
//   })
this.api.updateapi(this.data, this.data.id).subscribe(
  (res:any) => {
    console.log('API Response:', res);
    let ref = document.getElementById('cancel');
    if (ref) {
      ref.click();
    } else {
      console.warn('Cancel button not found');
    }
    this.formdata.reset();
    this.getallproducts();
  },
  (error) => {
    console.error('Update failed', error);
    alert('Update failed: ' + error.message); // Show an alert with the error message
  }
);
}

logout(){
  this.r.navigateByUrl('/')
}

}
