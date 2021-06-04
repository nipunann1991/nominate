import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {

  constructor() { }

  getJourneys(){

    return gql`
    {
      journeys {
        id
        title
        articles {
          topics 
          templates {
            ... on TemplateFreeText {
              id
              title
              duration
            }
            ... on TemplateHorizontalTab {
              id
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
        }
      }
    }` 
  }

  getSingleJourney(params){
   // ${params.selectedID.toString()}
    return gql`
    {
      journey(where: {id:  "${params.selectedID.toString()}" } ) {
        id
        title
        summary
        updatedAt
        appendix
        coverImage {
          url
        }
        articles {
          title
          type
          topics
          templates {
            ... on TemplateFreeText {
              id
              title
              duration
            }
            ... on TemplateHorizontalTab {
              id
            }
            ... on TemplateVideo {
              id
              duration
              title
            }
          }
          
        }
      }
    }` 
  }
}
