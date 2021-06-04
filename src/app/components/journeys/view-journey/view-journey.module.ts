import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewJourneyRoutingModule } from './view-journey-routing.module';
import { ViewJourneyComponent } from './view-journey.component';
import { AppSharedModule } from 'src/app/app.shared.module';


@NgModule({
  declarations: [
    ViewJourneyComponent,  
  ],
  imports: [
    CommonModule,
    ViewJourneyRoutingModule,
    AppSharedModule
  ],
   
 
})
export class ViewJourneyModule { }
