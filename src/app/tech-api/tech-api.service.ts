import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators'
import { Observable, Subject } from 'rxjs';

interface techApiResponse {
  id: number;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class TechApiService {

  private baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  private newsStoriesUrl = `${this.baseUrl}newstories.json`;
  private storyUrl = `${this.baseUrl}item/`
  private storyUrlEnd = '/.json?print=pretty'
  private pageSize = 10;
  private searchArray: Observable<number[]>


  constructor(private http: HttpClient) {
    this.searchArray = this.http.get<number[]>(this.newsStoriesUrl).pipe(
      map((id) => id)
    )
  }
}
