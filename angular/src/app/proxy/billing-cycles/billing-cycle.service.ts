import type { BillingCycleDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillingCycleService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BillingCycleDto>({
      method: 'GET',
      url: `/api/app/billing-cycle/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, BillingCycleDto[]>({
      method: 'GET',
      url: '/api/app/billing-cycle',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
