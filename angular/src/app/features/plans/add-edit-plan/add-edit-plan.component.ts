import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BillingCyclePlanDto, PlanDto, PlanService } from '@proxy/plans';
import { finalize } from 'rxjs';
import { BillingCycleService } from '@proxy/billing-cycles';
import { LocalizationService } from '@abp/ng.core';
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
  categoryList:CategoryDto[] = [];
  planBillingCycleList:BillingCyclePlanDto [] = [];
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
    }

    getBillingCycles(){
    if (this?.isEdit === true){
      this._planService.getBillingCyclePlan(this.plan?.id).subscribe(res=>{
        this.planBillingCycleList = res;
      })
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
    console.log(this?.planBillingCycleList)

  }
    initForm(){
    this.form = this._fb.group({
      name: [this.plan?.name, Validators.required],
      code: [{value: this.plan?.code, disabled: this.isEdit}, Validators.required],
      description: [this.plan?.description, Validators.required],
      freeTrailDays: [0, Validators.required],
      pricingModel: [{value: 0, disabled: true}, Validators.required],
      setUpFees: [{value: 0, disabled: this.isEdit}, Validators.required],
      categoryId: [this.plan?.categoryId, Validators.required],
      renewals: [0, Validators.required],
      accountingCode: [this.plan?.accountingCode, Validators.required],
      planStatus: [0, Validators.required],
      redirectUrl: [this.plan?.redirectUrl, Validators.required],
      billingCyclePlans:[this.plan?.billingCyclePlans]
    })
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
