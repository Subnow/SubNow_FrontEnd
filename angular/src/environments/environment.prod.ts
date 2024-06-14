import { Environment } from '@abp/ng.core';

const baseUrl = 'http://134.209.111.164';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'SubNow',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://localhost:5000/',
    redirectUri: baseUrl,
    clientId: 'SubNow_App',
    responseType: 'code',
    scope: 'offline_access SubNow',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'http://localhost:5000',
      rootNamespace: 'SubNow',
    },
  },
} as Environment;
