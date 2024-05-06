import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent {
  cname:any;
countrydetails:any;

constructor(public ar:ActivatedRoute){}
ngOnIt(){
  this.ar.queryParams.subscribe((qp)=>{
    console.log("qp"+qp)
   this.countrydetails=JSON.parse(qp['cd'])
  })
}
}
