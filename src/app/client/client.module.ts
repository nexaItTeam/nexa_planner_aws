import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { ProjectCostComponent } from './project/project-cost/project-cost.component';


@NgModule({
  declarations: [
    ViewProjectComponent,
    AddProjectComponent,
    ClientLayoutComponent,
    ProjectDetailsComponent,
    ProjectCostComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule
  ]
})
export class ClientModule { }
