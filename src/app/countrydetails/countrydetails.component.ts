import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  countrycode: any;
  conutrydetailes:any;
  constructor(public router: ActivatedRoute, public http:HttpClient) {}

  ngOnInit() {
    this.router.params.subscribe((qp) => {
      console.log(qp)
      this.countrycode=qp["cname"]
      this.http.get(`https://restcountries.com/v3/alpha/${this.countrycode}`).subscribe((data)=>{
        console.log(data)
        this.conutrydetailes=data
      })
    });
  }
}