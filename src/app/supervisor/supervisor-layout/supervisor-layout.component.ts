import { Component } from '@angular/core';
import {supervisormenuList} from 'src/app/shared/menuList'
@Component({
  selector: 'app-supervisor-layout',
  templateUrl: './supervisor-layout.component.html',
  styleUrls: ['./supervisor-layout.component.css']
})
export class SupervisorLayoutComponent {
public menuList = supervisormenuList
constructor(){
  console.log(this.menuList)
}

}
