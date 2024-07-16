import type { ApiKeyDto, CreateApiKeyDto, UpdateApiKeyDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiKeyService {
  apiName = 'Default';
  

  create = (input: CreateApiKeyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApiKeyDto>({
      method: 'POST',
      url: '/api/app/api-key',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getApiKeysForCompany = (companyId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApiKeyDto[]>({
      method: 'GET',
      url: `/api/app/api-key/api-keys-for-company/${companyId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: UpdateApiKeyDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApiKeyDto>({
      method: 'PUT',
      url: '/api/app/api-key',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
