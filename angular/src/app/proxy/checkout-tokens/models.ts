import type { CompanyBrandingDto } from '../companies/models';

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

export interface CheckoutDetailsDto {
  companyBranding: CompanyBrandingDto;
  customerName?: string;
  preferredLanguage?: string;
  planName?: string;
  billingCycle?: string;
  invoiceDetails: InvoiceDetailsDto;
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
  name: string;
  email?: string;
  phone?: string;
  lang?: string;
  address: AddressDto;
}

export interface InvoiceDetailsDto {
  planCost: number;
  subtotal: number;
  vat: number;
  total: number;
  totalDue: number;
}

export interface PlanCheckoutDto {
  planCode: string;
  planBillingCycleId: string;
  action: string;
}
