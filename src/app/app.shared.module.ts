import { NgModule } from '@angular/core'; 
import { TimeConverterPipe } from './pipes/time-converter.pipe';
import { BeautifyTextPipe } from './pipes/beautify-text.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

@NgModule({
  declarations: [
    TimeConverterPipe,
    BeautifyTextPipe,
    TruncateTextPipe
  ],
  imports: [ 

  ],
  exports: [  
    TimeConverterPipe,
    BeautifyTextPipe,
    TruncateTextPipe
  ],

  entryComponents: []
})
export class AppSharedModule {}


