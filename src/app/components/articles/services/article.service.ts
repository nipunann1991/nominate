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


  getSingleArticle(params){   
   
    return gql`
    {
      article(where: {id: "${params.selectedID.toString()}" }) {
        id
        title
        topics
        credits
        description
        coverImage {
          url
        }
        authorS {
          id
          name
          title
          profile_image {
            url
          }
        }
        templates {
          ... on TemplateFreeText {
            id
            duration
            title
            createdBy {
              picture
            }
            bodyContent {
              html
            }
          }
          ... on TemplateVideo {
            id
            duration
            title
            vimeoVideoUrl
            bodyContent {
              html
            }
          }
          ... on TemplateHorizontalTab {
            id
            title
            duration
            bodyContent {
              html
            }
            tabsContent {
              tabheadertitle
              content {
                html
              }
            }
          }

          ... on TemplateKnowledgeCheck {
            id
            title
            duration
            question  
            bodyContent {
              html
            }
          }
        }
      }
    }`
 
  }

  
}
