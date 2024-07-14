
export interface CreateUpdateWebHookDto {
  id?: string;
  endPointName: string;
  endPointURL: string;
  endPointSecret?: string;
  endPointStatus: boolean;
  companyId?: string;
  webHookEventTypes: WebHookEventTypeDto[];
}

export interface WebHookDto {
  id?: string;
  endPointName?: string;
  endPointURL?: string;
  endPointSecret?: string;
  endPointStatus: boolean;
  companyId?: string;
  webHookEventType: WebHookEventTypeDto[];
}

export interface WebHookEventTypeDto {
  id?: string;
  webHookId?: string;
  whEventTypeId?: string;
  status: boolean;
}
