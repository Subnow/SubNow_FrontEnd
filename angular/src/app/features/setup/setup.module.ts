import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { SharedModule } from '../../shared/shared.module';
import { CompanySettingsModalComponent } from './company-settings-modal/company-settings-modal.component';


@NgModule({
  declarations: [
    SetupComponent,
    CompanySettingsModalComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    PageTitleStandaloneComponent,
    SharedModule
  ]
})
export class SetupModule { }
