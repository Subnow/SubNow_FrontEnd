import type { EntityDto } from '@abp/ng.core';
import type { PlanStatusType } from '../enums/plan-status-type.enum';

export interface CategoryDto {
  id?: string;
  name?: string;
  description?: string;
  status: boolean;
  plans: PlansCategoryDto[];
}

export interface CategoryListDto extends EntityDto<string> {
  name?: string;
  description?: string;
  status: boolean;
  companyId?: string;
}

export interface CreateCategoryDto {
  name: string;
  description?: string;
  status: boolean;
}

export interface PlansCategoryDto {
  id?: string;
  name?: string;
  code?: string;
  showOnPaylink: boolean;
  planStatus: PlanStatusType;
  sort?: number;
}

export interface UpdateCategoryDto {
  name: string;
  description?: string;
  status: boolean;
  plans: PlansCategoryDto[];
}
