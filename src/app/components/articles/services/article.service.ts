import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(params){   
   
    return gql`
    {
      articles(first: ${params.first.toString()}, orderBy: updatedAt_DESC, where: ${params.where.toString()}) {
        id
        publishedAt
        title 
        description
        topics
        type
        updatedAt 
        coverImage {
          id 
          url
        }
        authorS {
          name
          id
          createdAt 
        }
      }
    }`
 
  }

  getTopicsList(){

    return gql`
    {
      topics {
        id 
        topics
      }
    }`

  }
  
}
