import type { BillingCyclePlanDto, CategoryPlansDto, CreatePlanDto, PlanDto, PlanNameDto, UpdatePlanDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  apiName = 'Default';
  

  create = (input: CreatePlanDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PlanDto>({
      method: 'POST',
      url: '/api/app/plan',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/plan/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PlanDto>({
      method: 'GET',
      url: `/api/app/plan/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAllPlansForCompany = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<CategoryPlansDto>>({
      method: 'GET',
      url: '/api/app/plan/plans-for-company',
    },
    { apiName: this.apiName,...config });
  

  getBillingCyclePlan = (planId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BillingCyclePlanDto[]>({
      method: 'GET',
      url: `/api/app/plan/billing-cycle-plan/${planId}`,
    },
    { apiName: this.apiName,...config });
  

  getBillingCyclePlanByPlanId = (planId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BillingCyclePlanDto[]>({
      method: 'GET',
      url: `/api/app/plan/billing-cycle-plan-by-plan-id/${planId}`,
    },
    { apiName: this.apiName,...config });
  

  getPlanName = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PlanNameDto[]>({
      method: 'GET',
      url: '/api/app/plan/plan-name',
    },
    { apiName: this.apiName,...config });
  

  getPlansByCategory = (categoryId: string, input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PlanDto>>({
      method: 'GET',
      url: `/api/app/plan/plans-by-category/${categoryId}`,
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdatePlanDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PlanDto>({
      method: 'PUT',
      url: `/api/app/plan/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
