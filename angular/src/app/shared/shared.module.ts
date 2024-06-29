import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbTooltipModule , NgbModalModule,NgbNavModule,NgbDatepickerModule,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const moduleList = [
  CoreModule,
  ThemeSharedModule,
  NgbDropdownModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule,
  ClickOutsideModule,
  CommonModule,
  NgbModalModule,
  ToastrModule,
  NgxValidateCoreModule,
  NgbTooltipModule,
  NgSelectModule,
  NgbNavModule,
  NgbDatepickerModule,
  NgxIntlTelInputModule,
  BsDatepickerModule
]

const declarationList = [
  TruncatePipe
]
@NgModule({
  declarations: [
    ...declarationList
  ],
  imports: [
    ...moduleList
  ],
  exports: [
    ...moduleList,
    ...declarationList
  ],
  providers: []
})
export class SharedModule {}
