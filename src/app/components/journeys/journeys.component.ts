import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'; 
import { JourneysService } from "./services/journeys.service";

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  
  journies: any = [];

  constructor(
    private apollo: Apollo,
    private journey: JourneysService
  ) { }

  ngOnInit(): void {
    this.getJourneys()
  }


  getJourneys(){

    this.apollo.watchQuery({
      query: this.journey.getJourneys(),
    }).valueChanges.subscribe((results: any) => {
  
      this.setJourneyData(results.data.journeys)

    });

  }


  setJourneyData(data){

    let categories = []
    let totalDuration = []
  
    data.forEach(element => {

      element.articles.filter(x=> {
        categories = categories.concat(x.topics);

        x.templates.filter(y => {
          totalDuration = totalDuration.concat(y.duration); 
        })

       
      }); 
      
      let uniqueCategories = [...new Set(categories)]; 
       
      let journies = {
        id: element.id,
        title: element.title,
        categories: uniqueCategories,
        totalDuration: totalDuration.reduce((a,b) => b + (a ? a : a)),
        url: "/journeys/view-journey/"+element.id
      }

      this.journies.push(journies)
      
    });

     
  }



}
