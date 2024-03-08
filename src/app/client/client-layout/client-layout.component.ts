import { Component } from '@angular/core';
import { adminmenuList } from 'src/app/shared/menuList';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent {
  public menuList = adminmenuList
}
