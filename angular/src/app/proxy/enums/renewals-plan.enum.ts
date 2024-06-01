import { mapEnumToOptions } from '@abp/ng.core';

export enum RenewalsPlan {
  AutoRenew = 0,
  ExpireSubscription = 1,
}

export const renewalsPlanOptions = mapEnumToOptions(RenewalsPlan);
