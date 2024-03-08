 
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
//import { SharedService } from 'src/app/shared/shared.service'
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  mobileQuery: any
  @Input() menudata: any;
  public userName!:string |any
  public userRole!:string |any
  constructor(
    private router:Router){
   
  }
  ngOnInit() {

   this.userName='test'
   this.userRole='admin'
   }
   public onLogOutClick(){
    localStorage.clear();
    window.location.reload();

   }
}
