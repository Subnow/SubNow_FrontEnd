import type { CustomerStatus } from '../enums/customer-status.enum';

export interface CreateCustomerDto {
  customerKey: string;
  name: string;
  email?: string;
  phone?: string;
  description?: string;
  customerStatus: CustomerStatus;
  photo?: string;
  customerSince?: string;
  joinedSubnow?: string;
  preferredLanguage?: string;
  vatid?: string;
  companyRegistryNumber?: string;
  address?: string;
  isBusiness: boolean;
  city?: string;
  stateProvince?: string;
  countryId?: string;
  tags?: string;
  customerSource: number;
}

export interface CustomerDto {
  id?: string;
  customerKey: string;
  name: string;
  email?: string;
  phone?: string;
  description?: string;
  customerStatus: CustomerStatus;
  photo?: string;
  customerSince?: string;
  joinedSubnow?: string;
  preferredLanguage?: string;
  vatid?: string;
  companyRegistryNumber?: string;
  address?: string;
  isBusiness: boolean;
  city?: string;
  stateProvince?: string;
  countryId?: string;
  tags?: string;
  customerSource: number;
}

export interface UpdateCustomerDto {
  name: string;
  email?: string;
  phone?: string;
  description?: string;
  customerStatus: CustomerStatus;
  photo?: string;
  preferredLanguage?: string;
  vatid?: string;
  companyRegistryNumber?: string;
  address?: string;
  isBusiness: boolean;
  city?: string;
  stateProvince?: string;
  countryId?: string;
  tags?: string;
  customerSource: number;
}
