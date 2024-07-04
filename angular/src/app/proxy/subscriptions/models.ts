
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
}

export interface SubscriptionDto {
  id?: string;
  customerId?: string;
  planId?: string;
  billingCyclePlanId?: string;
  startDate?: string;
  expiryDate?: string;
  totalAmount?: number;
  nextInvoiceLink?: string;
}
