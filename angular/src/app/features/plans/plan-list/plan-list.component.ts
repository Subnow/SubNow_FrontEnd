import { Component, inject } from '@angular/core';
import { BillingCyclePlanDto, CreatePlanDto, PlanDto, PlanService, UpdatePlanDto } from '@proxy/plans';
import {mapEnumToOptions} from '../../../shared/utils/mapEnumToOptions'
import { PlanStatusType, PricingModelType, RenewalsPlan } from '@proxy/enums';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditCategoriesModalComponent } from '../add-edit-categories-modal/add-edit-categories-modal.component';
import { CategoryDto, UpdateCategoryDto } from '@proxy/categories';
import { AddEditPlanComponent } from '../add-edit-plan/add-edit-plan.component';
@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {
  private modalService = inject(NgbModal);
  categoryList:CategoryDto[];
  planList;
  planStatus = mapEnumToOptions(PlanStatusType);
  isEdit:boolean = false;
  constructor(private _planService:PlanService) {
    this.getPlanList()
  }

  getPlanList(){
    this._planService.getAllPlansForCompany().subscribe((res=>{
      this.planList = res?.items;
      console.log(this?.planList)
    }))
  }

  addEditCategory(category?:any,index?: number): void {
    const modal = this.modalService.open(AddEditCategoriesModalComponent, { fullscreen: true, windowClass: 'custom-modal' });
    const categoryObj = {
      id:category?.categoryId,
      name:category?.categoryName,
      description:category?.categoryDescription,
      status:category?.status
    } as CategoryDto;

    (modal.componentInstance as AddEditCategoriesModalComponent).category = categoryObj;
     const reloadPlanList = modal.result.then((result =>{
      this.getPlanList();
    }))
    const closeSubscription = modal.closed.subscribe((updateCategory:UpdateCategoryDto)=>{
      if (updateCategory){
        if (typeof index === 'number') {
          console.log('edit');
          this.categoryList?.splice(index, 1, updateCategory);
        } else {
          //this.categoryList?.push(updateCategory);
        }
      }
    })
    closeSubscription.unsubscribe();
  }

  addEditPlan(plan?:PlanDto,index?:number,type?:string){

    if (type === 'edit'){
      this.isEdit = true
    }else {
      this.isEdit = false;
    }
    const modal = this.modalService.open(AddEditPlanComponent, { fullscreen: true, windowClass: 'custom-modal' });
    const planObj = {
      id:plan?.id,
      name:plan?.name,
      code: plan?.code,
      description: plan?.description,
      freeTrailDays: plan?.freeTrailDays,
      pricingModel: plan?.pricingModel,
      setUpFees: plan?.setUpFees,
      categoryId: plan?.categoryId,
      renewals: plan?.renewals,
      accountingCode:plan?.accountingCode,
      planStatus: plan?.planStatus,
      redirectUrl: plan?.redirectUrl,
      billingCyclePlans:plan?.billingCyclePlans
    } as PlanDto;

    (modal.componentInstance as AddEditPlanComponent).plan = planObj;
    (modal.componentInstance as AddEditPlanComponent).isEdit = this.isEdit;

    const reloadPlanList = modal.result.then((result =>{
      this.getPlanList();
    }))
    const closeSubscription = modal.closed.subscribe((updatePlan:UpdatePlanDto)=>{
      if (updatePlan){
        if (typeof index === 'number') {
          this.planList?.splice(index, 1, updatePlan);
          this.isEdit = true;
        } else {
          this.planList?.push(this.planList);
        }
      }
    })
    closeSubscription.unsubscribe();
  }
}

