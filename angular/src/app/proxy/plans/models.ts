import type { PricingModelType } from '../enums/pricing-model-type.enum';
import type { RenewalsPlan } from '../enums/renewals-plan.enum';
import type { PlanStatusType } from '../enums/plan-status-type.enum';

export interface BillingCyclePlanDto {
  planId: string;
  billingCycleId: string;
  price: number;
}

export interface CategoryPlansDto {
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
  plans: PlanDto[];
}

export interface CreatePlanDto {
  name: string;
  code: string;
  description?: string;
  freeTrailDays: number;
  pricingModel: PricingModelType;
  setUpFees: number;
  categoryId: string;
  renewals: RenewalsPlan;
  accountingCode: string;
  planStatus: PlanStatusType;
  redirectUrl?: string;
  billingCyclePlans: BillingCyclePlanDto[];
}

export interface PlanDto {
  id: string;
  name: string;
  code: string;
  description?: string;
  freeTrailDays: number;
  pricingModel: PricingModelType;
  setUpFees: number;
  categoryId: string;
  companyId: string;
  renewals: RenewalsPlan;
  accountingCode: string;
  planStatus: PlanStatusType;
  redirectUrl?: string;
  creationTime?: string;
  billingCyclePlans: BillingCyclePlanDto[];
}

export interface UpdatePlanDto extends CreatePlanDto {
  id: string;
}
