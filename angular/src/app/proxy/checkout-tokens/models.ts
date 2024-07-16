
export interface AddressDto {
  countryCode?: string;
  city?: string;
  address?: string;
}

export interface ApiError {
  code?: string;
  messageAr?: string;
  messageEn?: string;
}

export interface ApiResponse<T> {
  data: T;
  error: ApiError;
}

export interface CheckoutTokenDto {
  checkoutToken?: string;
  paymentURL?: string;
  tokenValidityInMinutes: number;
}

export interface CreateCheckoutTokenDto {
  customer: CustomerCheckoutDto;
  plan: PlanCheckoutDto;
}

export interface CustomerCheckoutDto {
  customerKey: string;
  name?: string;
  email?: string;
  phone?: string;
  lang?: string;
  address: AddressDto;
}

export interface PlanCheckoutDto {
  planCode: string;
  planBillingCycleId?: string;
  action: string;
}
