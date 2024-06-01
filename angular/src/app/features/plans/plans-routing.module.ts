import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';
import { PlanListComponent } from './plan-list/plan-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlansComponent,
    children:[
      {
        path:'',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component:PlanListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
