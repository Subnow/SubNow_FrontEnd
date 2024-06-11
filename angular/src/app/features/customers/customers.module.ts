import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    AddEditCustomerComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PageTitleStandaloneComponent,
    SharedModule,
  ]
})
export class CustomersModule { }
