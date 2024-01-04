import { Component } from '@angular/core';
import { NewsApiService, Article } from '../news-api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css']
})
export class NaArticleListComponent {
  articles: Article[];
  numberOfPages: number = 1; 

  constructor(private newsApiService: NewsApiService){
    this.articles = []

    this.newsApiService.pagesOutput.subscribe(articles => {
      this.articles = articles;
    })

    this.newsApiService.numberOfPages.subscribe((pages) => {
      this.numberOfPages = pages
    })

    this.newsApiService.getPage(1);
  }

  onPageClick(page: number){
    this.newsApiService.getPage(page);
  }
} 