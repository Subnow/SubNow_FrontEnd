import type { SubscriptionActivityTypeDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionActivityTypeService {
  apiName = 'Default';
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SubscriptionActivityTypeDto[]>({
      method: 'GET',
      url: '/api/app/subscription-activity-type',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
