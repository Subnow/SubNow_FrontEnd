import type { EventTypeDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventTypeService {
  apiName = 'Default';
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventTypeDto[]>({
      method: 'GET',
      url: '/api/app/event-type',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
