import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimatesListComponent } from './estimates/estimates-list/estimates-list.component';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';
import { MaterialModule } from './material.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { EditService } from './estimates/estimates-list/edit.service';
@NgModule({
  declarations: [
    AppComponent,
    EstimatesListComponent,
    CreateEstimatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    GridModule,
    HttpClientModule 
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
