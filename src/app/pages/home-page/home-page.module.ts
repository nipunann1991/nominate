import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ArticlesModule } from 'src/app/components/articles/articles.module';
import { JourneysModule } from 'src/app/components/journeys/journeys.module';
import { ViewJourneyModule } from 'src/app/components/journeys/view-journey/view-journey.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule, 
    HomePageRoutingModule,
    ArticlesModule,
    JourneysModule,
    ViewJourneyModule
  ]
})
export class HomePageModule { }
