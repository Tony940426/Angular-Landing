import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(){}

  getForcast(){
    this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '576f05572e3ddbe8b9d5d42c100f3291')
        })
      )
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