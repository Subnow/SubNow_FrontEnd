import type { CountryDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  apiName = 'Default';
  

  getAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<CountryDto>>({
      method: 'GET',
      url: '/api/app/country',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
