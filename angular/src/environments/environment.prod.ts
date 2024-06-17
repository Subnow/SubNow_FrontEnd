import { Environment } from '@abp/ng.core';

const baseUrl = 'https://134.209.111.164';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'SubNow',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: baseUrl,
    redirectUri: baseUrl,
    clientId: 'SubNow_App',
    responseType: 'code',
    scope: 'offline_access SubNow',
    requireHttps: true,
  },
  apis: {
    default: {
      url: baseUrl,
      rootNamespace: 'SubNow',
    },
  },
} as Environment;
