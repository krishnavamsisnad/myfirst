import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
  see=''
  constructor(public pr:ProductsService){}
  ngOnInit(){
    this.pr.getallproduct().subscribe((data)=>{
  this.products=data
    })
  }
}
