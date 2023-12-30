import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = 'd2cc59f8f5734a77acd4f59603df3a5f';
  private country = 'au';

  constructor() { }
}
