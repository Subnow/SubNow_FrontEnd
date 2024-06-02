import { Component, inject } from '@angular/core';
import {  PlanService } from '@proxy/plans';
import {mapEnumToOptions} from '../../../shared/utils/mapEnumToOptions'
import { PlanStatusType } from '@proxy/enums';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditCategoriesModalComponent } from '../add-edit-categories-modal/add-edit-categories-modal.component';
import { CategoryDto, UpdateCategoryDto } from '@proxy/categories';
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
  constructor(private _planService:PlanService) {
    this.getPlanList()
  }

  getPlanList(){
    this._planService.getAllPlansForCompany().subscribe((res=>{
      this.planList = res?.items;
      console.log(this?.planList)
    }))
  }

  addEditCategory(plan?:any,index?: number): void {
    const modal = this.modalService.open(AddEditCategoriesModalComponent, { fullscreen: true, windowClass: 'custom-modal' });
    const categoryObj = {
      id:plan?.categoryId,
      name:plan?.categoryName,
      description:plan?.categoryDescription
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
  // editPlan(categoryId: string): void {
  //     console.log(categoryId)
  // }
}
