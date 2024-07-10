import type { CreateUpdateWebHookDto, WebHookDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { EventTypeDto } from '../look-ups/models';

@Injectable({
  providedIn: 'root',
})
export class WebHookService {
  apiName = 'Default';
  

  create = (input: CreateUpdateWebHookDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WebHookDto>({
      method: 'POST',
      url: '/api/app/web-hook',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, WebHookDto>({
      method: 'GET',
      url: '/api/app/web-hook',
    },
    { apiName: this.apiName,...config });
  

  getAllEventTypes = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EventTypeDto[]>({
      method: 'GET',
      url: '/api/app/web-hook/event-types',
    },
    { apiName: this.apiName,...config });
  

  update = (input: CreateUpdateWebHookDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WebHookDto>({
      method: 'PUT',
      url: '/api/app/web-hook',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
