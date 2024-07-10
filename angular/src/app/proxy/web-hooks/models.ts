
export interface CreateUpdateWebHookDto {
  id?: string;
  endPointName?: string;
  endPointURL?: string;
  endPointSecret?: string;
  endPointStatusId?: string;
  companyId?: string;
  webHookEventTypes: WebHookEventTypeDto[];
}

export interface WebHookDto {
  id?: string;
  endPointName?: string;
  endPointURL?: string;
  endPointSecret?: string;
  endPointStatusId?: string;
  companyId?: string;
  webHookEventType: WebHookEventTypeDto[];
}

export interface WebHookEventTypeDto {
  id?: string;
  webHookId?: string;
  whEventTypeId?: string;
  status: boolean;
}
