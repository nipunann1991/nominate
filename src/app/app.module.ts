import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from './app.shared.module';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule, 
    AppSharedModule
  ],
  exports: [
    GraphQLModule, 
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
