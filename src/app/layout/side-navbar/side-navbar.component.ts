import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavbarComponent implements OnInit {
  @Input() menudatalist: any;
  public menuList:any
  public removeValueFromChildIndex: any = []
  public roleMenu: any
 
  constructor() {


  }

  ngOnInit() {
    this.setMenuItems('admin')
    // var role = this._sharedService.getRoleValue();

    // if (this._sharedService.isloggedin) {
    //   this.setMenuItems(role)
    // }
  }

  public setMenuItems(logrole: any) {
this.menuList=this.menudatalist
    this.roleMenu = []
    var menu = this.menuList.forEach((parentelemnt: any) => {
      const isrole = parentelemnt.allowedRoles.find((role: any) => role === logrole);
      if (isrole != null) {
        if (parentelemnt.children != null) {
          for (let i = 0; i < parentelemnt.children.length; i++) {
            const isAllowedChildRole = parentelemnt.children[i].allowedRoles.find((role: any) => role === logrole);
            if (isAllowedChildRole == null) {


              parentelemnt.children.splice(i, 1)
            }

          }
        }
        this.roleMenu.push(parentelemnt)
      }

    });
  }
}
