import { Environment } from '@abp/ng.core';

const baseUrl = 'https://134.209.111.164';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'SubNow',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://134.209.111.164/',
    redirectUri: baseUrl,
    clientId: 'SubNow_App',
    responseType: 'code',
    scope: 'offline_access SubNow',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://134.209.111.164',
      rootNamespace: 'SubNow',
    },
  },
} as Environment;
