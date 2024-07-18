import type { ActivateSubscriptionDto, ChangeSubscriptionDto, CreateSubscriptionDto, SubscriptionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  apiName = 'Default';
  

  activateSubscription = (ActivateSubscription: ActivateSubscriptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/subscription/activate-subscription',
      body: ActivateSubscription,
    },
    { apiName: this.apiName,...config });
  

  changeSubscription = (changeSubscription: ChangeSubscriptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/subscription/change-subscription',
      body: changeSubscription,
    },
    { apiName: this.apiName,...config });
  

  createSubscription = (input: CreateSubscriptionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'POST',
      url: '/api/app/subscription/subscription',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getSubscriptionDetails = (subscriptionId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'GET',
      url: `/api/app/subscription/subscription-details/${subscriptionId}`,
    },
    { apiName: this.apiName,...config });
  

  getSubscriptionsByCustomer = (customerId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'GET',
      url: `/api/app/subscription/subscriptions-by-customer/${customerId}`,
    },
    { apiName: this.apiName,...config });
  

  updateExpiryDate = (subscriptionId: string, newExpiryDate: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/subscription/expiry-date/${subscriptionId}`,
      params: { newExpiryDate },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
