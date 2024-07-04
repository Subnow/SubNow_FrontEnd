import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerSubscriptionComponent } from '../create-customer-subscription/create-customer-subscription.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-customer-subscription',
  templateUrl: './customer-subscription.component.html',
  styleUrl: './customer-subscription.component.scss'
})
export class CustomerSubscriptionComponent {
  form?: FormGroup;
  private modalService = inject(NgbModal);

  constructor(private clipboard: Clipboard) {

  }
  openCreateSubscriptionModal(): void {
    const modal = this.modalService.open(CreateCustomerSubscriptionComponent, { centered: true });

  }

  updateSubscriptionExpiryDate(): void {

  }
  copyActivationInvoice(text):void{
    this.clipboard.copy(text);
  }

}
