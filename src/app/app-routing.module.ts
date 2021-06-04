import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'articles', loadChildren: () => import('./components/articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'journeys/view-journey/:id', loadChildren: () => import('./components/journeys/view-journey/view-journey.module').then(m => m.ViewJourneyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
