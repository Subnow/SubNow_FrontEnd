import { mapEnumToOptions } from '@abp/ng.core';

export enum PricingModelType {
  FixedPrice = 0,
  DynamicPrice = 1,
}

export const pricingModelTypeOptions = mapEnumToOptions(PricingModelType);
