import { mapEnumToOptions } from '@abp/ng.core';

export enum PlanStatusType {
  Active = 0,
  Disabled = 1,
  Paused = 2,
}

export const planStatusTypeOptions = mapEnumToOptions(PlanStatusType);
