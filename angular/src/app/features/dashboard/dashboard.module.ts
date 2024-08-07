import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { NotFoundDataStandaloneComponent } from '../../standalone/not-found-data-standalone/not-found-data-standalone.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PageTitleStandaloneComponent,
    NotFoundDataStandaloneComponent,
  ]
})
export class DashboardModule { }
