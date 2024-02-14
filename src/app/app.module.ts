import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimatesListComponent } from './estimates/estimates-list/estimates-list.component';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    EstimatesListComponent,
    CreateEstimatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
