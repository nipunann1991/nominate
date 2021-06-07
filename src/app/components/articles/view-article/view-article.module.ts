import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewArticleRoutingModule } from './view-article-routing.module';
import { ViewArticleComponent } from './view-article.component';
import { AppSharedModule } from '../../../app.shared.module';


@NgModule({
  declarations: [ViewArticleComponent],
  imports: [
    CommonModule,
    ViewArticleRoutingModule,
    AppSharedModule
  ]
})
export class ViewArticleModule { }
