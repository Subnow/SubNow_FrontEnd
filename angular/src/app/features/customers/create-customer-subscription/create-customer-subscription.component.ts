import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanNameDto, PlanService } from '@proxy/plans';
import { BillingCycleDto, BillingCycleService } from '@proxy/billing-cycles';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateSubscriptionDto, SubscriptionService } from '@proxy/subscriptions';
import { CustomerDto } from '@proxy/customers';
import { expiryDateValidator, startDateValidator } from '../../../shared/utils/customValidation';
import { ToastrService } from 'ngx-toastr';
import { LocalizationService } from '@abp/ng.core';

@Component({
  selector: 'app-create-customer-subscription',
  templateUrl: './create-customer-subscription.component.html',
  styleUrl: './create-customer-subscription.component.scss'
})
export class CreateCustomerSubscriptionComponent implements OnInit{
  activeModal = inject(NgbActiveModal);
  planList:PlanNameDto[] =[];
  billingCycleList:BillingCycleDto[] = [];
  form?: FormGroup;
  subscription?:CreateSubscriptionDto;
  @Input() customer?: CustomerDto;
  invalidStartDate:boolean;
  constructor
  (
    private _toastr: ToastrService,
    private _localizationService: LocalizationService,
    public _fb: FormBuilder,
    private _planServices:PlanService,
    private _billingCycleService:BillingCycleService,
    private _subscriptionService:SubscriptionService,

  ) {
  }
  ngOnInit():void{
    this.getPlan()
    this.initForm();

    const startDateControl = this.form.get('startDate');
    const expiryDateControl = this.form.get('expiryDate');
    if (startDateControl && expiryDateControl) {
      startDateControl.setValidators([startDateValidator(expiryDateControl)]);
      expiryDateControl.setValidators([expiryDateValidator(startDateControl)]);
      startDateControl.updateValueAndValidity();
      expiryDateControl.updateValueAndValidity();
    }
  }
  initForm() {
    this.form = this._fb.group({
      planId: [this.subscription?.planId, Validators.required],
      billingCyclePlanId: [this.subscription?.billingCyclePlanId, Validators.required],
      markAsPaid:[false],
      startDate: [null],
      expiryDate: [null],
    })
    }
  getPlan(){
    this._planServices.getPlanName().subscribe((res=>{
      this.planList = res;
    }))
  }
  onChange($event: any) {
    const id = $event.planId;
    console.log('name -->' , id)
    this._planServices.getBillingCyclePlanByPlanId($event.planId).subscribe(res=>{
      this.billingCycleList = res;
    })
    console.log(this.billingCycleList)
  }

  closeModal() {
    this.activeModal.close();
  }
  createSubscription():void{
    if (!this.form) {
      return;
    }
    const createSubscriptionObj = {
      customerId: this?.customer.id,
      planId: this.form.get('planId').value,
      billingCyclePlanId: this.form.get('billingCyclePlanId').value,
      startDate: this.form.get('startDate').value,
      expiryDate: this.form.get('expiryDate').value
    } as CreateSubscriptionDto;
    this._subscriptionService.createSubscription(createSubscriptionObj).subscribe(()=>{
      this._toastr.success(this._localizationService.instant('General::subscriptionAddMsg'), '', {
        timeOut: 1000,
      });
      this.closeModal()
    })
  }
}
