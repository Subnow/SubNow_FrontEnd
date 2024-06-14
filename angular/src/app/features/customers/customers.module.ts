import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundDataStandaloneComponent } from '../../standalone/not-found-data-standalone/not-found-data-standalone.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    AddEditCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PageTitleStandaloneComponent,
    NotFoundDataStandaloneComponent,
    SharedModule,
  ]
})
export class CustomersModule { }
