import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   
  constructor() { }

  getRates(){
    return gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }`;
  }


  getUsers(){
    return gql`
    {
      users {
        id
        isActive
        kind
        name
        picture
        publishedAt
        stage
      }
    }`;
  }

}
