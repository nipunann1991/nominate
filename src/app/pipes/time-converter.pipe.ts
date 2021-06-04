import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})

export class TimeConverterPipe implements PipeTransform {
  // static forRoot(): any[] | import("@angular/core").Type<any> {
  //   throw new Error('Method not implemented.');
  // }
   
  transform(value: number): string {
    var num = value;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes); 

    if(rhours == 0){
      return rminutes + " min";
    }else{
      return rhours + " hr " + rminutes + " min";
    }

   
  }

}
