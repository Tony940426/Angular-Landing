import { Component } from '@angular/core';
import { TechApiService } from '../tech-api.service';

@Component({
  selector: 'app-tech-article-list',
  templateUrl: './tech-article-list.component.html',
  styleUrls: ['./tech-article-list.component.css']
})
export class TechArticleListComponent {
  articles: number[] = [];

  constructor(private techApiService: TechApiService){
    this.techApiService.searchArray.subscribe(articles => {
      this.articles = articles
      console.log(this.articles)
    })
  }
}
