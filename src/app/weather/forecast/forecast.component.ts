import { Component } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forcastData: any = [];

  constructor(forecastService: ForecastService){
    forecastService.getForcast().subscribe(data => {
      this.forcastData = data;
    })
  }
}