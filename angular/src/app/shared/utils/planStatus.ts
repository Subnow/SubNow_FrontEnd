import { PlanStatusType } from '@proxy/enums';
import { LocalizationService } from '@abp/ng.core';
import { inject } from '@angular/core';



export function statusClass(status: PlanStatusType): string {
  switch (status) {
    case PlanStatusType.Active:
      return 'badge-success';
    case PlanStatusType.Disabled:
      return 'badge-danger';
    case PlanStatusType.Paused:
      return 'badge-warning';
    default:
      return 'badge-info';
  }
}

export function statusText(status: PlanStatusType): string {
  switch (status) {
    case PlanStatusType.Active:
      return 'Active';
    case PlanStatusType.Disabled:
      return 'Disabled';
    case PlanStatusType.Paused:
      return 'Paused';

    default:
      return status || '';
  }
}

export class PlanStatusHelper {
  statusClass(status: PlanStatusType): string {
    return statusClass(status);
  }

  statusText(status: PlanStatusType): string {
    return statusText(status);
  }
}
