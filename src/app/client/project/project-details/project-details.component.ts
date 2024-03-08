import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  weatherData: any;
  tiles: string[] = ['Tile 1', 'Tile 2', 'Tile 3', 'Tile 4', 'Tile 5', 'Tile 6', 'Tile 7', 'Tile 8', 'Tile 9', 'Tile 10'];
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
constructor(private route:Router){
  this.weatherData = {
    city: 'New York',
    country: 'US',
    temperature: 20,
    description: 'Sunny'
  };
}
tileClicked(tile: string) {
 this.route.navigate(['client/project-cost'])
}
}
