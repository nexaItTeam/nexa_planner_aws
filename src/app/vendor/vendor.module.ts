import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorLayoutComponent } from './vendor-layout/vendor-layout.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { SideNavbarComponent } from '../layout/side-navbar/side-navbar.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    VendorLayoutComponent,
    VendorDashboardComponent,
  
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class VendorModule { }
