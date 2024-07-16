import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BillingCyclePlanDto, PlanDto, PlanService } from '@proxy/plans';
import { finalize } from 'rxjs';
import { BillingCycleService } from '@proxy/billing-cycles';
import { LocalizationService } from '@abp/ng.core';
import { RegularExpression } from '../../../shared/constants/regular-expressions';
import { urlValidator } from '../../../shared/utils/customValidation';
@Component({
  selector: 'app-add-edit-plan',
  templateUrl: './add-edit-plan.component.html',
  styleUrl: './add-edit-plan.component.scss'
})
export class AddEditPlanComponent  implements OnInit{
  @Input() plan?: PlanDto;
  @Input() isEdit?: boolean;
  form: FormGroup;
  activeModal = inject(NgbActiveModal);
  isLoading = false;
  categoryList = [];
  planBillingCycleList:BillingCyclePlanDto [] = [];
  isSelectedBillingCycle = false;
  constructor(
    public _fb: FormBuilder,
    private _categoryService:CategoryService,
    private _billingCycleService:BillingCycleService,
    private _planService:PlanService,
    private _localizationService: LocalizationService,
    private toastr: ToastrService)
  {
  }
    ngOnInit(): void {
      this.initForm();
      this.getCategoryList();
      this.getBillingCycles();
      console.log('plan===>' , this.plan)
    }

    getBillingCycles(){
    if (this?.isEdit === true){
      this._planService.getBillingCyclePlan(this.plan?.id).subscribe(res=>{
        this.planBillingCycleList = res;
      })
      this.isSelectedBillingCycle = true;
    }
    else {
      this._planService.getBillingCyclePlan('00000000-0000-0000-0000-000000000000').subscribe(res=>{
        this.planBillingCycleList = res;
      })
    }
    }

    getCategoryList(){
    this._categoryService.getAllByCompanyId().subscribe((data=>{
      this.categoryList = data?.items;
    }))
    }

  toggleActiveStatus(cycle:[]): void {
    const hasActivePlan = this?.planBillingCycleList.some(plan => plan.active === true);
    if (hasActivePlan){
     this.isSelectedBillingCycle = true;
    }else {
      this.isSelectedBillingCycle = false;
    }
  }
    initForm(){
    if (this.isEdit === true){
      this.form = this._fb.group({
        name: [this.plan?.name, Validators.required],
        code: [{value: this.plan?.code, disabled: this.isEdit}, Validators.required],
        description: [this.plan?.description, Validators.maxLength(250)],
        freeTrailDays: [this.plan?.freeTrailDays],
        pricingModel: [{value: this?.plan?.pricingModel, disabled: true}],
        setUpFees: [this?.plan?.setUpFees],
        categoryId: [this.plan?.categoryId,Validators.required],
        renewals: [this.plan?.renewals],
        accountingCode: [this.plan?.accountingCode, ],
        planStatus: [this.plan?.planStatus],
        redirectUrl: [this.plan?.redirectUrl,urlValidator()],
        billingCyclePlans:[this.plan?.billingCyclePlans]
      })
    }else{
      this.form = this._fb.group({
        name: [this.plan?.name, Validators.required],
        code: [this.plan?.code, Validators.required],
        description: [this.plan?.description, Validators.maxLength(250)],
        freeTrailDays: [0],
        pricingModel: [{ value:0,disabled: true }],
        setUpFees: [0],
        categoryId: [this.plan?.categoryId,Validators.required],
        renewals: [0, Validators.required],
        accountingCode: [this.plan?.accountingCode],
        planStatus: [0],
        redirectUrl: [this.plan?.redirectUrl,urlValidator()],
        billingCyclePlans:[this.plan?.billingCyclePlans]
      })

    }
  }
  createEditPlan(): void {
    if (!this.form) {
      return;
    }
    const { id } = this.plan || {};
    const createPlan = {
      name: this.form.controls.name?.value,
      code: this.form.controls.code?.value,
      description: this.form.controls.description?.value,
      freeTrailDays: Number(this.form.controls.freeTrailDays?.value) ,
      pricingModel: this.form.controls.pricingModel?.value,
      setUpFees: Number(this.form.controls.setUpFees?.value),
      categoryId: this.form.controls.categoryId?.value,
      renewals: this.form.controls.renewals?.value,
      accountingCode: this.form.controls.accountingCode?.value,
      planStatus: this.form.controls.planStatus?.value,
      redirectUrl: this.form.controls.redirectUrl?.value,
      billingCyclePlans:this?.planBillingCycleList.filter(x=>x.active === true)
    };

    (!id
        ? this._planService.create(createPlan)
        : this._planService.update(id,{id,...createPlan})
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        if (id) {
          this.toastr.success(this._localizationService.instant('General::planEditMsg'), '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success(this._localizationService.instant('General::planAddMsg'), '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }

  closeModal(){
    this.activeModal.close();
  }
}
