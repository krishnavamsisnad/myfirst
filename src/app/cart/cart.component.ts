import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any
counter=0
num=1
constructor(public router:ActivatedRoute,public pr:ProductservicesService,public rout:Router){}

ngOnInit(){
let id=this.router.snapshot.params['id']
this.pr.getbyid(id).subscribe((data)=>{
  console.log(data)
  this.product=data
})
}
next(){
  this.rout.navigateByUrl('/buynow')

}
inc(){
  this.counter=this.num++
}
dec(){
  this.counter=this.num--
}

}
