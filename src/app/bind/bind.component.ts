import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {
  name="welcome to snad";
  company:string="snad"
  gender=null
  Imagemale="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
  Imagefemale="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
  students=["vamsi","sai","kittu"]
  abc(){
    alert("hi")
  };
  //sort function
  emsort(k:any){
    this.employer.sort((a:any,b:any)=>{
      if(a[k]>b[k]){
        return 1
      }
      else{

        return -1
      }
    })
   }
   alltechology=['html',"js","css"]
   selected:any=[]
   updatetechology(e:any){
    if(e.target.checked){
     this.selected.push(e.target.value)
    }
    else{
      this.selected=this.selected.filter((tech:any)=>{
        if(tech===e.target.value){
          return false
        }
        else{
          return true
        }

      })
    }
   }
 employer=[
  {
    fristname:"vamsi",
    lastname:"nalluri",
    age:22,
    gender:"male"
  },
  {
    fristname:"sai",
    lastname:"Epupagati",
    age:26,
    gender:"female"
  },{
    fristname:"kittu",
    lastname:"nalluri",
    age:22,
    gender:"male"
  },{
    fristname:"bhannu",
    lastname:"nalluri",
    age:22,
    gender:"femae"
  }
 ]
 
}



