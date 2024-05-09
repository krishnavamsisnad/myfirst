import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetailes.component.html',
  styleUrls: ['./productdetailes.component.css']
})
export class ProductdetailesComponent {
constructor(public pra:ActivatedRoute){}
  products:any
  productdata:any;
ngOnInit(){
  this.pra.params.subscribe((qa)=>{
    console.log(qa)

    this.products=qa["id"]

    this.pra.queryParams.subscribe((product:any)=>{
      this.productdata=product
      console.log(product)
    
    })
    
  })
}
}
