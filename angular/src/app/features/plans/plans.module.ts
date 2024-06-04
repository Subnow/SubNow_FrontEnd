import { NgModule } from '@angular/core';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { SharedModule } from '../../shared/shared.module';
import { StatusBadgeComponent } from '../../standalone/status-badge/status-badge.component';
import { AddEditCategoriesModalComponent } from './add-edit-categories-modal/add-edit-categories-modal.component';
import { AddEditPlanComponent } from './add-edit-plan/add-edit-plan.component';


@NgModule({
  declarations: [
    PlansComponent,
    PlanListComponent,
    AddEditCategoriesModalComponent,
    AddEditPlanComponent,
  ],
  imports: [
    PlansRoutingModule,
    PageTitleStandaloneComponent,
    StatusBadgeComponent,
    SharedModule
  ]
})
export class PlansModule { }
