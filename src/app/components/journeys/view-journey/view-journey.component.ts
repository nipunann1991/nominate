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
    window.scroll(0,0)
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
    let articleAuthours = [];
    let articleCredits = [];

    data.articles.filter(x=> {
        categories = categories.concat(x.topics);
        articleCredits  = articleCredits.concat(x.credits) 
        articleDuration = [0];

        x.authorS.filter(y => {
          articleAuthours = articleAuthours.concat(y.name) 
        })

        x.templates.filter(y => {
          articleDuration = articleDuration.concat(y.duration)
          totalDuration = totalDuration.concat(y.duration); 
        })
 
        articleData.push(Object.assign({}, x , {duration: articleDuration.reduce((a,b) => b + (a ? a : a))}))
       
      }); 
      
      let uniqueCategories = [...new Set(categories)]; 
       
      this.journeyData = {
        id: data.id,
        title: data.title,
        coverImage: data.coverImage?.url,
        summary: data.summary,
        appendix: data.appendix,
        categories: uniqueCategories,
        totalDuration: totalDuration.reduce((a,b) => { return b + (a ? a : a) },0), 
        articles: articleData,
        credits: articleCredits.reduce((a,b) => { return b + (a ? a : a) },0),
        authours: articleAuthours
      }  
  }

  getAuthers(authers){ 
    return authers?.toString().replace(",", ", ")
  }

}
