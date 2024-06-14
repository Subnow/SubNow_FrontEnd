import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'SubNow',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://134.209.111.164/',
    redirectUri: baseUrl,
    clientId: 'SubNow_App',
    responseType: 'code',
    scope: 'offline_access SubNow',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'http://134.209.111.164',
      rootNamespace: 'SubNow',
    },
  },
} as Environment;
