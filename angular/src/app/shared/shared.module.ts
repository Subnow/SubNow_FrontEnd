import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbPopoverModule , NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


const moduleList = [
  CoreModule,
  ThemeSharedModule,
  NgbDropdownModule,
  NgxValidateCoreModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule,
  NgbPopoverModule,
  ClickOutsideModule,
  CommonModule,
  NgbModalModule,
  ToastrModule
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
