import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.css']
})
export class ProjectCostComponent {
constructor(private router:Router){

}
onEstimateClick(){
this.router.navigate(['client/createestimate'])
}
}
