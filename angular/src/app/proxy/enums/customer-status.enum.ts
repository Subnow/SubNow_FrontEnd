import { mapEnumToOptions } from '@abp/ng.core';

export enum CustomerStatus {
  Active = 0,
  Cancelled = 1,
  Future = 2,
  Paused = 3,
  NonRenewing = 4,
  Trial = 5,
  Expired = 6,
}

export const customerStatusOptions = mapEnumToOptions(CustomerStatus);
