import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';
import { LoginComponent } from './login/login.component';
import { VendorLayoutComponent } from './vendor/vendor-layout/vendor-layout.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { SupervisorLayoutComponent } from './supervisor/supervisor-layout/supervisor-layout.component';
import { SupervisorDashboardComponent } from './supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { ViewProjectComponent } from './client/project/view-project/view-project.component';
import { AddProjectComponent } from './client/project/add-project/add-project.component';
import { ProjectDetailsComponent } from './client/project/project-details/project-details.component';
import { ProjectCostComponent } from './client/project/project-cost/project-cost.component';



const routes: Routes = [
  
 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'client',
    component: ClientLayoutComponent,
    canActivate: [],
    data: { roles: ['1','2'] ,type:'admin'},
    children: [
      {
        path: 'view-project',
        component: ViewProjectComponent,
        data: { type:'admin'},
      }, 
      {
        path: 'add-project',
        component: AddProjectComponent,
        data: { type:'admin'},
      }, 
      {
        path: 'project-detail',
        component: ProjectDetailsComponent,
        data: { type:'admin'},
      }, 
      {
        path: 'project-cost',
        component: ProjectCostComponent,
        data: { type:'admin'},
      },
      {
        path: 'createestimate',
        component: CreateEstimatesComponent,
        data: { type:'admin'},
      }, 
                
    ]
  },
  
  {
    path: 'vendor',
    component: VendorLayoutComponent,
    canActivate: [],
    data: { roles: ['1','2'] ,type:'broker'},
    children: [
      {
        path: 'dashboard',
        component: VendorDashboardComponent,
        data: { type:'broker'},
      },           
    ]
  },
  {
    path: 'supervisor',
    component: SupervisorLayoutComponent,
    canActivate: [],
    data: { roles: ['1','2'] ,type:'broker'},
    children: [
      {
        path: 'dashboard',
        component: SupervisorDashboardComponent,
       
      },           
    ]
  },
  { path: '**', component: LoginComponent } ,// always iclude these at last otherwise routes will not load
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
