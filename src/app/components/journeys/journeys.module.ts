import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneysRoutingModule } from './journeys-routing.module';
import { JourneysComponent } from './journeys.component';
import { AppSharedModule } from '../../app.shared.module';
// import { TimeConverterPipe } from '../../pipes/time-converter.pipe';


@NgModule({
  declarations: [
    JourneysComponent,
  ],
  imports: [
    CommonModule,
    JourneysRoutingModule, 
    AppSharedModule
  ],
  exports: [JourneysComponent]
})
export class JourneysModule { }
