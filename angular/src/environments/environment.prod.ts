import { Environment } from '@abp/ng.core';

const baseUrl = 'https://subnow.netlify.app';

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
// https://134.209.111.164/connect/authorize?response_type=code&client_id=SubNow_App&state=Y0RYU1hpZ1AwaGRDQlNuQWFSSWlRNWw1Ynp4fldaUkVtd3VLZ2hKRkFhN3VO%3B%252Fdashboard&redirect_uri=https%3A%2F%2F134.209.111.164&scope=openid%20offline_access%20SubNow&code_challenge=RTzyr-Ufhl1mlgZftwIB86hD1UDZUJf6u7FYHcYwBVs&code_challenge_method=S256&nonce=Y0RYU1hpZ1AwaGRDQlNuQWFSSWlRNWw1Ynp4fldaUkVtd3VLZ2hKRkFhN3VO&culture=en&ui-culture=en&returnUrl=%2Fdashboard

//https://134.209.111.164/connect/authorize?response_type=code&client_id=SubNow_App&state=Z013UEkzM01mRkg1TmhPZS1xTGlWN2NqRXY1UWlKUjNnb0hFQXpHUHl2ZlZy%3B%252Fdashboard&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid%20offline_access%20SubNow&code_challenge=9VuvB2GBXuJ64xQjOHmQHNfLAfJJpdniDkgdEfwV-Ak&code_challenge_method=S256&nonce=Z013UEkzM01mRkg1TmhPZS1xTGlWN2NqRXY1UWlKUjNnb0hFQXpHUHl2ZlZy&culture=en&ui-culture=en&returnUrl=%2Fdashboard
