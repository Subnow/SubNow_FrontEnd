import { Component } from '@angular/core';
import { PlanDto, PlanService } from '@proxy/plans';
import {mapEnumToOptions} from '../../../shared/utils/mapEnumToOptions'
import { PlanStatusType } from '@proxy/enums';
@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {
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

  editPlan(id: string, plan:PlanDto): void {
      console.log(id, plan)
  }

  editCategory(categoryId: string): void {
      console.log(categoryId)
  }
}
