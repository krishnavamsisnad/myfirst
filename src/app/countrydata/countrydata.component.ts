import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoutryapiService } from '../coutryapi.service';

@Component({
  selector: 'app-countrydata',
  templateUrl: './countrydata.component.html',
  styleUrls: ['./countrydata.component.css']
})
export class CountrydataComponent {
  countrydata:any
constructor(public router:ActivatedRoute,public cdata:CoutryapiService){}
ngOnInit(){
  let id=this.router.snapshot.params['cname']
  console.log(id)
  this.cdata.getbycname(id).subscribe((data)=>{
      console.log(data)
    this.countrydata=data
  })
}
}
