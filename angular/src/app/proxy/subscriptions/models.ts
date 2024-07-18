
export interface ActivateSubscriptionDto {
  token?: string;
  subscriptionId?: string;
}

export interface ChangeSubscriptionDto {
  subscriptionId?: string;
  newPlanId?: string;
  newBillingCyclePlanId?: string;
}

export interface CreateSubscriptionDto {
  customerId?: string;
  planId?: string;
  billingCyclePlanId?: string;
  startDate?: string;
  expiryDate?: string;
  markAsPaid: boolean;
}

export interface SubscriptionDto {
  id?: string;
  customerId?: string;
  planId?: string;
  planName?: string;
  billingCyclePlanId?: string;
  billingCycleName?: string;
  startDate?: string;
  expiryDate?: string;
  totalAmount?: number;
  nextInvoiceLink?: string;
  subscriptionStatusId?: string;
}
