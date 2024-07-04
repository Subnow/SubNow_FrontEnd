import type { EntityDto } from '@abp/ng.core';

export interface CountryDto {
  id?: string;
  name?: string;
  code?: string;
  flagUrl?: string;
}

export interface CurrencyDto extends EntityDto<string> {
  name?: string;
  code?: string;
  arabicName?: string;
  isDefault: boolean;
}
