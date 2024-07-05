import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { PageTitleStandaloneComponent } from '../../standalone/page-title-standalone/page-title-standalone.component';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundDataStandaloneComponent } from '../../standalone/not-found-data-standalone/not-found-data-standalone.component';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { CustomerSubscriptionComponent } from './customer-subscription/customer-subscription.component';
import { CreateCustomerSubscriptionComponent } from './create-customer-subscription/create-customer-subscription.component';
import { ChangeExpiryDateModalComponent } from './change-expiry-date-modal/change-expiry-date-modal.component';
import { UpdateCustomerSubscriptionComponent } from './update-customer-subscription/update-customer-subscription.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    AddEditCustomerComponent,
    CustomerModalComponent,
    CustomerSubscriptionComponent,
    CreateCustomerSubscriptionComponent,
    ChangeExpiryDateModalComponent,
    UpdateCustomerSubscriptionComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    PageTitleStandaloneComponent,
    NotFoundDataStandaloneComponent,
    SharedModule,
  ],
})
export class CustomersModule { }
