import type { CurrencyDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CurrencyDto>({
      method: 'GET',
      url: `/api/app/currency/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getByCode = (code: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CurrencyDto>({
      method: 'GET',
      url: '/api/app/currency/by-code',
      params: { code },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CurrencyDto>>({
      method: 'GET',
      url: '/api/app/currency',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
