import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimatesComponent } from './estimates/create-estimates/create-estimates.component';



const routes: Routes = [
  {
    path: '',
    component: CreateEstimatesComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
