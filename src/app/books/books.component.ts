import { Component } from '@angular/core';
import { BookapiService } from './bookapi.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  book:any;
  bookId:any;
  booktitle:any;
 
  constructor(public api:BookapiService){}
ngOnInit(){
this.getbook()
}

getbook(){
  this.api.getallbooks().subscribe({
    next:(data)=>{
      console.log(data)
      this.book=data
    }
  })
}

addnew(){
  let newbooks={
    "id":this.bookId,
    "title":this.booktitle
  }
  this.api.addbook(newbooks).subscribe((res)=>{
    console.log(res)
    this.getbook();
  })

}
deleted(id:any){
this.api.deletbook(id).subscribe((res)=>{
  console.log(res)
  this.getbook()
})
}
editbook(book:any){
  this.bookId=book.id;
  this.booktitle=book.title;


}
update(){
let upatebook={
  "id":this.bookId,
  "title":this.booktitle

}
  this.api.editbook(this.bookId,upatebook).subscribe((res)=>{
    this.getbook()
  })
}
}
