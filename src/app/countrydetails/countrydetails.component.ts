import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {
  cname: any;
  countrydetails: any;

  constructor(public router: ActivatedRoute) {}

  ngOnInit() {
    this.router.queryParams.subscribe((qp) => {
      this.countrydetails = qp[this.cname];
    });
  }
}
