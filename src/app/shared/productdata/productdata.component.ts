import { Component } from '@angular/core';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  data:any
  constructor(public api:ProductapiService){}
ngOnInit(){
  this.api.getproducts().subscribe((res)=>{
    this.data=res
  })

}
}
