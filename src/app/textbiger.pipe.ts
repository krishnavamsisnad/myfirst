import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textbiger'
})
export class TextbigerPipe implements PipeTransform {

  transform(value:any) {
    return value.toUpperCase();
  }

}
