import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ArticleService } from "../services/article.service";
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {

  articleData: any = [];
  correctAnswers: any = []
  isAnswerCorrect: boolean;
  isAnswerSelected: boolean = false;

  constructor(
    private apollo: Apollo,
    private article: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this. getSingleArticle() 
  }


  getSingleArticle(isFiltered = false, topic = ""){

    let params = { selectedID: this.activatedRoute.snapshot.params.id }

    this.apollo.watchQuery({
      query: this.article.getSingleArticle(params),
    }).valueChanges.subscribe((results: any) => {

      this.articleData = results.data.article
      console.log(this.articleData)

    });
  }

  trustURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollToSection(elementId): void { 
    this.viewportScroller.scrollToAnchor("section"+(elementId + 1));
  } 

  checkSingleAnswer(question, i){
    this.isAnswerSelected = true;

    if(question.correctAnswer == i + 1){ 
      this.isAnswerCorrect = true;
    }else{
      this.isAnswerCorrect =  false;
    } 
  }

  
}
