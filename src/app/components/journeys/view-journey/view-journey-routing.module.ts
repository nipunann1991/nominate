import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJourneyComponent } from './view-journey.component';

const routes: Routes = [{ path: '', component: ViewJourneyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewJourneyRoutingModule { }
