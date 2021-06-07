import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyText'
})
export class BeautifyTextPipe implements PipeTransform {

  transform(title: string): string {
    return title.replace("_", " ")  
  }

}
