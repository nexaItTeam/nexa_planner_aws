import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorLayoutComponent } from './supervisor-layout/supervisor-layout.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import {SideNavbarComponent} from 'src/app/layout/side-navbar/side-navbar.component'
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    SupervisorLayoutComponent,
    SupervisorDashboardComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LayoutModule
  ]
})
export class SupervisorModule { }
