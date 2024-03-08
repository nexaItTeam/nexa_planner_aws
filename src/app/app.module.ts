import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SideNavbarComponent} from 'src/app/layout/side-navbar/side-navbar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimatesListComponent } from './estimates/estimates-list/estimates-list.component';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';
import { MaterialModule } from './material.module';

import { GridModule ,PDFModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { EditService } from './estimates/estimates-list/edit.service';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SupervisorModule } from './supervisor/supervisor.module';
import { VendorModule } from './vendor/vendor.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ClientModule } from './client/client.module';
@NgModule({
  declarations: [
    AppComponent,
    EstimatesListComponent,
    CreateEstimatesComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    GridModule,
    PDFModule,
    HttpClientModule ,
    SupervisorModule,
    VendorModule,
    ClientModule, //add module otherwisw it will give error for side bar
    BrowserAnimationsModule
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
