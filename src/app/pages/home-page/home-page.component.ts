import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { HomeService } from "./services/home.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private home: HomeService
  ) {}

  ngOnInit(): void {

    this.apollo
      .watchQuery({
        query: this.home.getUsers(),
      })
      .valueChanges.subscribe((result: any) => {
         
      });

  }

}
