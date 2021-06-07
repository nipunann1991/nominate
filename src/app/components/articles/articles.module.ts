import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { AppSharedModule } from '../../app.shared.module';


@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    AppSharedModule
  ],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
