import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { JourneysService } from "../services/journeys.service";
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-view-journey',
  templateUrl: './view-journey.component.html',
  styleUrls: ['./view-journey.component.scss']
})
export class ViewJourneyComponent implements OnInit {

  journeyData :any = [];

  constructor(
    private apollo: Apollo,
    private journey: JourneysService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSingleJourney(); 
  }


  getSingleJourney(){

    let params = { selectedID: this.activatedRoute.snapshot.params.id }
 
    this.apollo.watchQuery({
      query: this.journey.getSingleJourney(params),
    }).valueChanges.subscribe((results: any) => {

      //this.journeyData = results.data.journey
       console.log( results.data.journey )

       this.setJourneyData(results.data.journey)

    }); 

  }


  setJourneyData(data){

    let categories = [];
    let totalDuration = [];
    let articleDuration = [];
    let articleData = [];

    data.articles.filter(x=> {
        categories = categories.concat(x.topics);
        articleDuration = [0]

        x.templates.filter(y => {
          articleDuration = articleDuration.concat(y.duration)
          totalDuration = totalDuration.concat(y.duration); 
        })
 
        articleData.push(Object.assign({}, x , {duration: articleDuration.reduce((a,b) => b + (a ? a : a))}))
       
      }); 
      
      let uniqueCategories = [...new Set(categories)]; 
       
      let journies = {
        id: data.id,
        title: data.title,
        coverImage: data.coverImage?.url,
        summary: data.summary,
        appendix: data.appendix,
        categories: uniqueCategories,
        totalDuration: totalDuration.reduce((a,b) => b + (a ? a : a)), 
        articles: articleData
      }

      this.journeyData = journies; 

      console.log( this.journeyData )
     
  }

}
