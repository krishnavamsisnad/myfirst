import { Component } from '@angular/core';
import { ProductapiService } from '../productapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  data:any
  constructor(public api:ProductapiService,public r:Router){}
ngOnInit(){
  this.getallproducts()
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
}
