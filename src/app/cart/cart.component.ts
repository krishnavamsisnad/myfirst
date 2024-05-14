import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any

constructor(public router:ActivatedRoute,public pr:ProductservicesService){}

ngOnInit(){
let id=this.router.snapshot.params['id']
this.pr.getbyid(id).subscribe((data)=>{
  console.log(data)
  this.product=data
})
}

}
