import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCostComponent } from './project/project-cost/project-cost.component';
import { ScheduleChartComponent } from './project/project-details-submodule/schedule-chart/schedule-chart.component';
import { ProjectAssigneComponent } from './project/project-details-submodule/project-assigne/project-assigne.component';
import { ProjectMatListComponent } from './project/project-details-submodule/project-mat-list/project-mat-list.component';
import { EditService } from './estimates/estimates-list/edit.service';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';
import { EstimatesListComponent } from './estimates/estimates-list/estimates-list.component';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { RoleMappingComponent } from './master/role-mapping/role-mapping.component';
import { ViewEmployeeComponent } from './master/view-employee/view-employee.component';
import { ProjectChecklistComponent } from './project/project-details-submodule/project-checklist/project-checklist.component';


@NgModule({
  declarations: [
    ViewProjectComponent,
    AddProjectComponent,
    ClientLayoutComponent,
    ProjectDetailsComponent,
    ProjectCostComponent,
    ScheduleChartComponent,
    ProjectAssigneComponent,
    ProjectMatListComponent,
    EstimatesListComponent,
    CreateEstimatesComponent,
    RoleMappingComponent,
    ViewEmployeeComponent,
    ProjectChecklistComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    HttpClientModule ,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[EditService]
})
export class ClientModule { }
