import { Component } from '@angular/core';
import { ProductapiService } from '../productapi.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  data:any
userdata:any
  constructor(public api:ProductapiService,public r:Router,public http:HttpClient){}
ngOnInit(){
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

edit(){

}


}
