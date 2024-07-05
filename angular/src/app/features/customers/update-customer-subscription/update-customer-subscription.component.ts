import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeSubscriptionDto, SubscriptionDto, SubscriptionService } from '@proxy/subscriptions';
import { LocalizationService } from '@abp/ng.core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanNameDto, PlanService } from '@proxy/plans';
import { BillingCycleDto, BillingCycleService } from '@proxy/billing-cycles';

@Component({
  selector: 'app-update-customer-subscription',
  templateUrl: './update-customer-subscription.component.html',
  styleUrl: './update-customer-subscription.component.scss'
})
export class UpdateCustomerSubscriptionComponent implements OnInit{
  form?: FormGroup;
  activeModal = inject(NgbActiveModal);
  subscription?:SubscriptionDto = {};
  planList:PlanNameDto[] =[];
  billingCycleList:BillingCycleDto[] = [];
  constructor(
     private _toastr: ToastrService,
     public _fb: FormBuilder,
     private _subscriptionService: SubscriptionService,
     private _localizationService: LocalizationService,
     private _planServices:PlanService,
     private _billingCycleService:BillingCycleService,
  ) {
  }
  ngOnInit(): void {
    this.initForm();
    this.getPlan()
    this._planServices.getBillingCyclePlanByPlanId(this?.subscription?.planId).subscribe(res=>{
      this.billingCycleList = res;
    })
  }

  initForm() {
    this.form = this._fb.group({
      newPlanId: [this?.subscription?.planId, Validators.required],
      newBillingCyclePlanId: [this?.subscription?.billingCyclePlanId, Validators.required],
      },
    )

  }
  getPlan(){
    this._planServices.getPlanName().subscribe((res=>{
      this.planList = res;
    }))
  }
  onChange($event: any) {
    this.form.get('newBillingCyclePlanId').setValue(null);
    const id = $event.planId;
    this._planServices.getBillingCyclePlanByPlanId($event.planId).subscribe(res=>{
      this.billingCycleList = res;
    })
  }
  changeSubscription(): void {
    const changeSubscriptionObj  = {
      subscriptionId: this?.subscription?.id,
      newPlanId: this.form?.get('newPlanId').value,
      newBillingCyclePlanId: this.form?.get('newBillingCyclePlanId').value,
    } as ChangeSubscriptionDto;
    this?._subscriptionService?.changeSubscription(changeSubscriptionObj).subscribe(()=>{
      this._toastr.success(this._localizationService.instant('General::updateSubscriptionSuccessfully'), '', {
        timeOut: 1000,
      });
      this.closeModal();
    })
  }
  closeModal() {
    this.activeModal.close();
  }

}
