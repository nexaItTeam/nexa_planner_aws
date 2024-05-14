import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GenericApiService } from 'src/app/shared/generic-api.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsComponent implements OnInit {
  weatherData: any;
  tiles: string[] = ['Schedule Chart', 'Project Cost', 'Material List', 'Assignee Details', 'Checklist', 'Archived Documents', 'Site', 'Checklist', 'Quotation from vendor', 'Tile 10'];
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  public currentWeather:any
  public nextFiveDays:any
  constructor(private route: Router, private _apiService: GenericApiService) {
    this.weatherData = {
      city: 'New York',
      country: 'US',
      temperature: 20,
      description: 'Sunny'
    };
  }
  ngOnInit(): void {
    this.getWeatherUpdates()
  }
  tileClicked(tile: string) {
    const routekey = tile.toLowerCase().replace(/\s+/g, '-');
    this.route.navigate(['client/' + routekey])
  }
  private getWeatherUpdates() {
    this.currentWeather ={}
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-33.7667&lon=150.9167&appid=1670b63d986c2f10f6745ce4fcedcb34"

    const currentDate = new Date();
    this._apiService.fetchweatherData(apiUrl).subscribe((data:any) => {
    // const result = data.list;
    //   this.filteredForecasts = result.filter((forecast:any) => {
    //     const forecastDate = new Date(forecast.dt * 1000); // Convert UNIX timestamp to milliseconds
    //     return forecastDate >= currentDate;
    //   });
    console.log(data)
   
    this.currentWeather = data.list[0];
    this.currentWeather = {
      city: data.city, // Assuming data.city contains city information
      weather: data.list[0], // Assuming data.list[0] contains current weather information
    };
    // Assuming first item is current weather
    this.nextFiveDays = data.list.slice(1, data.list.length);
    });
   
  
  }
  getWeatherIconUrl(iconCode: string): string {
    // Assuming the icon code format is "xxd" where "xx" represents the icon number
   
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }
  
}
