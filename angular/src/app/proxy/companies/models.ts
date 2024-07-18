
export interface ApiKeyDto {
  id?: string;
  keyName?: string;
  key?: string;
  companyId?: string;
}

export interface CompanyBrandingDto {
  companyId?: string;
  companyName?: string;
  companyLogo?: string;
  subdomain?: string;
  backgroundColor?: string;
  buttonsColor?: string;
  xAccount?: string;
  facebookAccount?: string;
  instagramAccount?: string;
  linkedinAccount?: string;
  whatsappNumber?: string;
  supportLink?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}

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

export interface CreateApiKeyDto {
  keyName: string;
  companyId: string;
}

export interface UpdateApiKeyDto {
  id: string;
  keyName: string;
}

export interface UpdateCompanyBrandingDto {
  companyId?: string;
  companyLogo?: string;
  logoType?: string;
  backgroundColor?: string;
  buttonsColor?: string;
  xAccount?: string;
  facebookAccount?: string;
  instagramAccount?: string;
  linkedinAccount?: string;
  whatsappNumber?: string;
  supportLink?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}

export interface UpdateCompanyDto {
  id: string;
  name: string;
  nameAr?: string;
  description?: string;
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
