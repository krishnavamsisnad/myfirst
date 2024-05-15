import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productserach'
})
export class ProductserachPipe implements PipeTransform {

  transform(value:any, args:any): any {
    
      if(args){
        return value.filter((a:any)=>{
          return JSON.stringify(a).toUpperCase().includes(args.toUpperCase())
        })
      }
      else{
        return value
      }
    
      
    
  }

}
