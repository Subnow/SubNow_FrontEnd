
export interface CompanyDto {
  id?: string;
  name?: string;
  nameAr?: string;
  description?: string;
  currencyCode?: string;
  companyRegistrationNo?: string;
  taxID?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
  stateOrProvince?: string;
  city?: string;
  countryId?: string;
  photo?: string;
  subDomain?: string;
}

export interface UpdateCompanyDto {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  currencyCode: string;
  companyRegistrationNo?: string;
  taxID?: string;
  address1?: string;
  address2?: string;
  photo?: string;
  postalCode?: string;
  stateOrProvince?: string;
  city?: string;
  countryId: string;
}
