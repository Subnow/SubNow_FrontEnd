import type { EntityDto } from '@abp/ng.core';

export interface CategoryDto {
  id?: string;
  name?: string;
  description?: string;
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
}

export interface UpdateCategoryDto {
  name: string;
  description?: string;
}
