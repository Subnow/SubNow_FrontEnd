import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';


const moduleList = [
  CoreModule,
  ThemeSharedModule,
  NgbDropdownModule,
  NgxValidateCoreModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...moduleList
  ],
  exports: [
    ...moduleList
  ],
  providers: []
})
export class SharedModule {}
