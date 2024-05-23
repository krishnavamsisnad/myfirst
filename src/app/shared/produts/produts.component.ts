import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {
  fromdata!:FormGroup
  constructor( public Rout:Router,public fr:FormBuilder,public http:HttpClient){}

  ngOnInit(){
    this.fromdata=this.fr.group({
      username:[""],
      password:[''],
      role:['']
    })
  }
  onsingup(){
    this.http.post('http://localhost:3000/singin',this.fromdata.value).subscribe((res)=>{
      alert("suceesfully Rigerstions")
      this.Rout.navigateByUrl('')
    
    })
  }
// sub(data:any){

// console.log(data)
// this.Rout.navigateByUrl('/productdata')
// }

}
