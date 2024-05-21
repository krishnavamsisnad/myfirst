import { Component } from '@angular/core';
import { BookapiService } from './bookapi.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor(public api:BookapiService){}
ngOnInit(){
  this.api.getallbooks().subscribe({
    next:(data)=>{
      console.log(data)
    }
  })
}
}
