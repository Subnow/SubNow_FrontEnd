import { AfterViewInit, Component, inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerSubscriptionComponent } from '../create-customer-subscription/create-customer-subscription.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { CustomerDto } from '@proxy/customers';
import { CustomerModalComponent } from '../customer-modal/customer-modal.component';
import { SubscriptionDto, SubscriptionService } from '@proxy/subscriptions';
import { ChangeExpiryDateModalComponent } from '../change-expiry-date-modal/change-expiry-date-modal.component';
import { DatePipe } from '@angular/common';
import { UpdateCustomerSubscriptionComponent } from '../update-customer-subscription/update-customer-subscription.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-customer-subscription',
  templateUrl: './customer-subscription.component.html',
  styleUrl: './customer-subscription.component.scss'
})
export class CustomerSubscriptionComponent implements OnInit {
  @Input() customer?: CustomerDto;
  form?: FormGroup;
  customerId: string = '';
  subscriptionObj: SubscriptionDto = {};
  private modalService = inject(NgbModal);


  constructor(
    private clipboard: Clipboard,
    private _subscriptionService: SubscriptionService,
    public _fb: FormBuilder,

  ) {
 }
  ngOnInit(): void {
    this.customerId = this.customer?.id;
    this.getSubscriptionByCustomerId();
  }

  getSubscriptionByCustomerId() {
    this._subscriptionService.getSubscriptionsByCustomer(this.customer?.id).subscribe((res) => {
      this.subscriptionObj = res;
    })
  }
  openCreateSubscriptionModal(): void {
    const modal = this.modalService.open(CreateCustomerSubscriptionComponent, { centered: true });
    (modal.componentInstance as CustomerModalComponent).customer = (modal.componentInstance as CreateCustomerSubscriptionComponent).customer = this.customer;
    const reloadPlanList = modal.result.then((result =>{
      this.getSubscriptionByCustomerId();
    }))
  }



  updateSubscriptionExpiryDate(): void {
    const modal = this.modalService.open(ChangeExpiryDateModalComponent, { centered: true });
    (modal.componentInstance as ChangeExpiryDateModalComponent).subscription = (modal.componentInstance as ChangeExpiryDateModalComponent).subscription = this.subscriptionObj;
    const reloadPlanList = modal.result.then((result =>{
      this.getSubscriptionByCustomerId();
    }))
  }

  copyActivationInvoice(text): void {
    this.clipboard.copy(text);
  }



  changeSubscription(): void {
    const modal = this.modalService.open(UpdateCustomerSubscriptionComponent, { centered: true });
    (modal.componentInstance as UpdateCustomerSubscriptionComponent).subscription = (modal.componentInstance as UpdateCustomerSubscriptionComponent).subscription = this.subscriptionObj;
    const reloadPlanList = modal.result.then((result =>{
      this.getSubscriptionByCustomerId();
    }))
  }
}

