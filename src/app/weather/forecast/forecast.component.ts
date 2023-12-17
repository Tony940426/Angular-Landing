import { Component } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forecastData$: Observable<{ dateString: string; temp: number} []>

  constructor(forecastService: ForecastService){
    this.forecastData$ = forecastService.getForcast()
  }
}