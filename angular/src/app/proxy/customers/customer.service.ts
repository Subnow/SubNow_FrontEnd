import type { CreateCustomerDto, CustomerDto, CustomerNameKeyDto, GetCustomersFilterDto, UpdateCustomerDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiName = 'Default';
  

  create = (input: CreateCustomerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'POST',
      url: '/api/app/customer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/customer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'GET',
      url: `/api/app/customer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCompanyCustomers = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerNameKeyDto[]>({
      method: 'GET',
      url: '/api/app/customer/company-customers',
    },
    { apiName: this.apiName,...config });
  

  getFilteredCustomers = (input: GetCustomersFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto[]>({
      method: 'GET',
      url: '/api/app/customer/filtered-customers',
      params: { status: input.status, plan: input.plan, searchTerm: input.searchTerm },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CustomerDto>>({
      method: 'GET',
      url: '/api/app/customer',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (input: UpdateCustomerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CustomerDto>({
      method: 'PUT',
      url: '/api/app/customer',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
