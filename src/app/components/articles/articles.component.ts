import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ArticleService } from "./services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: any = [];
  topics: any = [];

  constructor(
    private apollo: Apollo,
    private article: ArticleService
  ) { }

  ngOnInit(): void {

    this.getArticles(); 
    this.getTopicsList()
  }

  getArticles(isFiltered = false, topic = ""){

    let params = {};

    if(isFiltered){
      params = { first: 10, where: "{topics_contains_all: "+topic+" }" }
    }else{
      params = { first: 10, where: "{}" }
    }
    

    this.apollo.watchQuery({
      query: this.article.getArticles(params),
    }).valueChanges.subscribe((results: any) => {

      this.articles = results.data.articles 

    });
  }


  getTopicsList(){

    this.apollo.watchQuery({
      query: this.article.getTopicsList(),
    }).valueChanges.subscribe((results: any) => {

      this.topics = results.data.topics[0].topics; 

    });

  }

  cleanTopicTitles(title){
    return title.replace("_", " ")
  }

  onChangeTopics(topic){
    (topic != "")? this.getArticles(true, topic) : this.getArticles();
    
  }

}
