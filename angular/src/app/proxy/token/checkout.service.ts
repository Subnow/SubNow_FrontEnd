import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ApiResponse, CheckoutDetailsDto, CheckoutTokenDto, CreateCheckoutTokenDto } from '../checkout-tokens/models';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  apiName = 'Default';
  

  createCheckoutToken = (input: CreateCheckoutTokenDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ApiResponse<CheckoutTokenDto>>({
      method: 'POST',
      url: '/api/app/checkout/checkout-token',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getCheckoutDetails = (token: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CheckoutDetailsDto>({
      method: 'GET',
      url: '/api/app/checkout/checkout-details',
      params: { token },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
