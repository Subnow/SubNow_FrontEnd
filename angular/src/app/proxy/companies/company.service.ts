import type { CompanyBrandingDto, CompanyDto, UpdateCompanyBrandingDto, UpdateCompanyDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  apiName = 'Default';
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompanyDto>({
      method: 'GET',
      url: '/api/app/company',
    },
    { apiName: this.apiName,...config });
  

  getBranding = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompanyBrandingDto>({
      method: 'GET',
      url: '/api/app/company/branding',
    },
    { apiName: this.apiName,...config });
  

  update = (input: UpdateCompanyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CompanyDto>({
      method: 'PUT',
      url: '/api/app/company',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateBranding = (input: UpdateCompanyBrandingDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/app/company/branding',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
