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

export interface InvoiceAddOns {
  name?: string;
  price: number;
  quantity: number;
  total: number;
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
  invoiceNumber?: string;
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
  customerAddress?: string;
  customerCity?: string;
  customerPostalCode?: string;
  customerStateOrProvince?: string;
  customerCountry?: string;
  isBusiness?: string;
  crid?: string;
  taxID?: string;
  contactDetails?: string;
  products: ProductDto[];
  invoiceAddOns: InvoiceAddOns[];
  paidAmount: number;
  totalWithVAT: number;
  vat: number;
  vatAmount: number;
  subTotal: number;
  subTotalWithVat: number;
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
  companyCity?: string;
  companyStateOrProvince?: string;
  companyCountry?: string;
  companyId?: string;
  companyContactInfo?: string;
  companyTaxID?: string;
  companyPostalCode?: string;
  invoiceNumber?: string;
  title?: string;
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
  planName?: string;
  price: number;
  quantity: number;
  total: number;
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
