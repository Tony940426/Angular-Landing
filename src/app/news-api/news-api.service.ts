import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {tap, map, switchMap, pluck } from  'rxjs/operators'
import { HttpParams, HttpClient } from '@angular/common/http';

export interface Article {
  title: string;
  url: string;
  source: {
    name:string;
  }
}
interface NewsApiResponse {
  totalResults: number;
  articles: Article[]
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = 'd2cc59f8f5734a77acd4f59603df3a5f';
  private country = 'au';

  private pagesInput: Subject<number>;
  pagesOutput: Observable<Article[]>
  numberOfPages: Subject <number>;

  constructor(private http: HttpClient) {
    this.numberOfPages = new Subject();
    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', this.pageSize)
          .set('page', page);  
      }),
      switchMap((params) => {
        return this.http.get<NewsApiResponse>(this.url, {params} )
      }),
      tap(response => {
        const totalPages = Math.ceil(response.totalResults / this.pageSize)
        this.numberOfPages.next(totalPages)
      }),
      map(x => x.articles)
    );
  }
  getPage(page: number){
    this.pagesInput.next(page);
  }
}
