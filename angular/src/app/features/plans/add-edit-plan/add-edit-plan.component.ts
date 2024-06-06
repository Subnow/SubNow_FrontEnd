import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryDto, CategoryService } from '@proxy/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BillingCyclePlanDto, PlanDto, PlanService, UpdatePlanDto } from '@proxy/plans';
import { finalize } from 'rxjs';
import { BillingCycleDto, BillingCycleService } from '@proxy/billing-cycles';
interface CycleData {
  id: string;
  name: string;
  durationInDays: number;
  price?: number;
  active?: boolean;
}
@Component({
  selector: 'app-add-edit-plan',
  templateUrl: './add-edit-plan.component.html',
  styleUrl: './add-edit-plan.component.scss'
})
export class AddEditPlanComponent  implements OnInit{
  @Input() plan?: PlanDto;
  @Input() type?: string;
   form: FormGroup;
   activeModal = inject(NgbActiveModal);
   isLoading = false;
   categoryList:CategoryDto[] = [];
   billingCycleList:BillingCycleDto[] =[];
   planBillingCycleList =[]
   billingCycles: CycleData[];
   selectedCycles = [];
   planId;



  constructor(
    public _fb: FormBuilder,
    private _categoryService:CategoryService,
    private _billingCycleService:BillingCycleService,
    private _planService:PlanService,
    private toastr: ToastrService)
  {

  }
    ngOnInit(): void {
      this.initForm();
      this.getCategoryList();
      this.getBillingCycles();
    }

   enhanceBillingCycles(arr1, arr2) {
    return arr2.map(cycle => {
      // Find matching billing cycle in arr1
      const matchingPlan = arr1?.find(plan => plan.billingCycleId === cycle.id);
      return {
        ...cycle,
        price: matchingPlan ? matchingPlan.price : '',  // Use price from arr1 if matched, else 0
        active: !!matchingPlan  // True if match found, false otherwise
      };
    });
  }
    getCategoryList(){
    this._categoryService.getAllByCompanyId().subscribe((data=>{
      this.categoryList = data?.items;

    }))
    }
   processPlans(arr1, arr2) {
    return arr1.map(item => {
      const match = arr2.some(entry => entry.id === item.billingCycleId);
      return {
        ...item,
        price: match ? item.price : 0,  // If match, keep original price, otherwise set to 0
        active: match  // True if match, false if no match
      };
    });
  }

  toggleActiveStatus(cycle: CycleData[]): void {
    console.log('cycle===>' , cycle)
    console.log('planBillingCycleList', this?.planBillingCycleList)

    this.selectedCycles = this?.planBillingCycleList.filter(x =>x.active === true);
    console.log(this?.planBillingCycleList.filter(x =>x.active === true))
  }

  getBillingCycles(){
        this._billingCycleService.getAll().subscribe((data=>{
          this.billingCycleList = data;
          const arr1 = this.plan?.billingCyclePlans;
          const arr2 = this.billingCycleList;
          this.planBillingCycleList = this.enhanceBillingCycles(arr1, arr2);
        }))
    }

    initForm(){
    this.form = this._fb.group({
      name: [this.plan?.name, Validators.required],
      code: [this.plan?.code, Validators.required],
      description: [this.plan?.description, Validators.required],
      freeTrailDays: [this.plan?.freeTrailDays, Validators.required],
      pricingModel: [this.plan?.pricingModel, Validators.required],
      setUpFees: [this.plan?.setUpFees, Validators.required],
      categoryId: [this.plan?.categoryId, Validators.required],
      companyId: [this.plan?.companyId, Validators.required],
      renewals: [this.plan?.renewals, Validators.required],
      accountingCode: [this.plan?.accountingCode, Validators.required],
      planStatus: [this.plan?.planStatus, Validators.required],
      redirectUrl: [this.plan?.redirectUrl, Validators.required],
      creationTime: [this.plan?.creationTime, Validators.required],
      billingCyclePlans: [this.plan?.billingCyclePlans, Validators.required],

    })
  }
  createEditPlan(): void {
    debugger
    if (!this.form) {
      return;
    }

// Using forEach() to create partial objects
    const { id } = this.plan || {};
    let list = [];
    this.selectedCycles.forEach(obj => {
      const partialObj = {} as BillingCyclePlanDto;
      partialObj.billingCycleId = obj.id;
      partialObj.price = Number(obj.price)
      partialObj.planId = id
      list.push(partialObj);
    });

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
      billingCyclePlans:list
    };

    (!id
        ? this._planService.create(createPlan)
        : this._planService.update(id,{id,...createPlan})
    )
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        console.log(value);
        if (id) {
          this.toastr.success('Plan Edit successfully', '', {
            timeOut: 1000,
          });
        } else {
          this.toastr.success('Plan Add successfully', '', {
            timeOut: 1000,
          });
        }
        this.activeModal.close(value);
      });
  }

  closeModal(){
    this.activeModal.close();
  }
  test($event){
    const target = event.target as HTMLInputElement;
    console.log(target?.value)
    $event.target.checked;
    this.form.controls.renewals.setValue(target?.value);


  }
}
