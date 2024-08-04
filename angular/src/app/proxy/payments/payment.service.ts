import type { GetInvoiceDto, InvoiceDto, InvoiceFilterDto, InvoicePdfDto, PaidInvoiceDetailsDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiName = 'Default';
  

  getInvoiceById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetInvoiceDto>({
      method: 'GET',
      url: `/api/app/payment/${id}/invoice-by-id`,
    },
    { apiName: this.apiName,...config });
  

  getInvoicePDFDetails = (invoiceId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InvoicePdfDto>({
      method: 'GET',
      url: `/api/app/payment/invoice-pDFDetails/${invoiceId}`,
    },
    { apiName: this.apiName,...config });
  

  getInvoices = (input: InvoiceFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<InvoiceDto>>({
      method: 'GET',
      url: '/api/app/payment/invoices',
      params: { id: input.id, customerName: input.customerName, customerKey: input.customerKey, status: input.status, eventType: input.eventType, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPaidInvoiceDetails = (invoiceId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PaidInvoiceDetailsDto>({
      method: 'GET',
      url: `/api/app/payment/paid-invoice-details/${invoiceId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
