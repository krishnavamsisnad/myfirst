import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, args:string): any{
  if(args){
    return value.filter((a:any)=>{
      return JSON.stringify(a).toLowerCase().includes(args.toLowerCase())
    })
  }
  else{
    return value
  }

  }

}
