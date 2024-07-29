import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { ViewInvoiceDetailsComponent } from './view-invoice-details/view-invoice-details.component';


@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceListComponent,
    ViewInvoiceDetailsComponent,
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    PageTitleStandaloneComponent
  ]
})
export class InvoicesModule { }
