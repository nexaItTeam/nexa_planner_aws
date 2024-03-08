import { Component } from '@angular/core';
import{vendormenuList} from 'src/app/shared/menuList'
@Component({
  selector: 'app-vendor-layout',
  templateUrl: './vendor-layout.component.html',
  styleUrls: ['./vendor-layout.component.css']
})
export class VendorLayoutComponent {
  public menuList = vendormenuList
}
