import { Component, inject, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-customer-subscription',
  templateUrl: './create-customer-subscription.component.html',
  styleUrl: './create-customer-subscription.component.scss'
})
export class CreateCustomerSubscriptionComponent implements OnInit{
  activeModal = inject(NgbActiveModal);
  planList:any[];
  billingCycle:any[];
  closeModal() {
    this.activeModal.close();
  }
  constructor() {

  }
  ngOnInit():void{
    this.planList = [
      {
        id: "0",
        name: "plan_one"
      },
      {
        id: "1",
        name: "plan_two"
      }
    ]
    this.billingCycle = [
      {
        id: "0",
        name: "Yearly"
      },
      {
        id: "1",
        name: "Monthly"
      }
    ]

  }
}
