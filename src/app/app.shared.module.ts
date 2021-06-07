import { NgModule } from '@angular/core'; 
import { TimeConverterPipe } from './pipes/time-converter.pipe';
import { BeautifyTextPipe } from './pipes/beautify-text.pipe';

@NgModule({
  declarations: [
    TimeConverterPipe,
    BeautifyTextPipe
  ],
  imports: [ 

  ],
  exports: [  
    TimeConverterPipe,
    BeautifyTextPipe
  ],

  entryComponents: []
})
export class AppSharedModule {}


