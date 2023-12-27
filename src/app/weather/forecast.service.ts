import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, filter, toArray } from 'rxjs/operators';
import { NotificationsService } from '../notifications/notifications.service';

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient, private notificationsService: NotificationsService ){}

  getForcast(){
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '576f05572e3ddbe8b9d5d42c100f3291')
        }),
        switchMap(params => this.http.get<OpenWeatherResponse>(this.url, {params})),
        map(data => data.list),
        mergeMap(value => of(...value)),
        filter((value, index) => index % 8 === 0),
        map( value => {
          return {
            dateString: value.dt_txt,
            temp: value.main.temp
          }
        }),
        toArray()
      );
  }

  getCurrentLocation(){
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    })
  }
}