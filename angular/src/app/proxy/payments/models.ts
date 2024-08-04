import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetInvoiceDto {
  invoiceId?: string;
  totalDue?: string;
  createdDate?: string;
  expiryDate?: string;
  invoiceStatusId?: string;
  customerName?: string;
  customerKey?: string;
  customerId?: string;
  planName?: string;
  billingCycleName?: string;
  planCategoryName?: string;
  paymentProcessor?: string;
  paymentTypeId?: string;
  paymentReference?: string;
  paymentMethodId?: string;
  paymentCompanyId?: string;
  createdBy?: string;
  invoiceNumber?: string;
  payLink?: string;
  eventType?: string;
  totalRefunded?: string;
  cancelledDate?: string;
  cancelledBy?: string;
  paymentDate?: string;
}

export interface InvoiceDto {
  id?: string;
  invoiceNumber?: string;
  amount: number;
  createdBy?: string;
  expiryDate?: string;
  eventType?: string;
  invoiceStatusId?: string;
  customerName?: string;
  customerkey?: string;
  planName?: string;
}

export interface InvoiceFilterDto extends PagedAndSortedResultRequestDto {
  id?: string;
  customerName?: string;
  customerKey?: string;
  status?: string;
  eventType?: string;
}

export interface InvoicePdfDto {
  invoiceId?: string;
  expiryDate?: string;
  createdDate?: string;
  status?: string;
  createdBy?: string;
  totalDue: number;
  customerName?: string;
  customerKey?: string;
  address?: string;
  crid?: string;
  taxID?: string;
  contactDetails?: string;
  products: ProductDto[];
  paidAmount: number;
  totalWithVAT: number;
  vat: number;
  paymentMethod?: string;
  paymentType?: string;
  paymentProcessor?: string;
  paymentDetails?: string;
  paymentReference?: string;
  paymentCompany?: string;
  paymentDateTime?: string;
  companyName?: string;
  companyLogo?: string;
  companyAddress?: string;
  companyContactInfo?: string;
  companyTaxID?: string;
  title?: string;
  isBusiness:boolean;
  companyId:string;
  invoiceNumber:string;
  companyPostalCode:string;
  companyCity:string;
  companyCountry:string;
  customerCity:string;
  customerPostalCode:string;
  subTotal:string;
  subTotalWithVat:string;

}

export interface PaidInvoiceDetailsDto {
  companyLogo?: string;
  backgroundColor?: string;
  buttonsColor?: string;
  xAccount?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  whatsappNumber?: string;
  supportLink?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
  planName?: string;
  billingCycle?: string;
  planCost?: number;
  subTotal: number;
  vat: number;
  total: number;
  totalDue: number;
}

export interface ProductDto {
  name?: string;
  planName?: string;
  planCategoryName?: string;
  price: number;
  quantity: number;
  subtotal: number;
  vat: number;
  totalWithVAT: number;
}

export interface Source {
  type?: string;
  company?: string;
  name?: string;
  number?: string;
  gateway_id?: string;
  reference_number?: string;
  token?: string;
  message?: string;
  transaction_url?: string;
}

export interface TokenizationDto {
  id?: string;
  status?: string;
  amount: number;
  fee: number;
  currency?: string;
  refunded: number;
  refunded_at?: string;
  captured: number;
  captured_at?: string;
  voided_at?: string;
  description?: string;
  amount_format?: string;
  fee_format?: string;
  refunded_format?: string;
  captured_format?: string;
  invoice_id?: string;
  ip?: string;
  callback_url?: string;
  created_at?: string;
  cpdated_at?: string;
  metadata: Record<string, string>;
  source: Source;
}
