import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@abp/ng.core';
import { PaymentLayoutComponent } from './custom-core/components/layout/payment-layout/payment-layout.component';
import { MainLayoutComponent } from './custom-core/components/layout/main-layout/main-layout.component';
import { InvoiceStatusStandaloneComponent } from './standalone/invoice-status-standalone/invoice-status-standalone.component';
import { PaymentStandaloneComponent } from './standalone/payment-standalone/payment-standalone.component';
import { DownloadInvoicePdfComponent } from './standalone/download-invoice-pdf/download-invoice-pdf.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'dashboard',
  },

  {
    path: 'dashboard',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard]
  },

  {
    path: 'plans',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/plans/plans.module').then(m => m.PlansModule),
    canActivate: [authGuard]

  },

  {
    path: 'invoices',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule),
    canActivate: [authGuard]

  },

  {
    path: 'customers',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule),
    canActivate: [authGuard]
  },
  {
    path: 'integrations',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/integrations/integrations.module').then(m => m.IntegrationsModule),
    canActivate: [authGuard]
  },
  {
    path: 'setup',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule) ,
    canActivate: [authGuard]
  },
  {
    path: 'support',
    component:MainLayoutComponent,
    loadChildren: () => import('./features/support/support.module').then(m => m.SupportModule),
    canActivate: [authGuard]

  },
  {
    path: 'invoice-status/:token',
    component:InvoiceStatusStandaloneComponent,
    canActivate: [authGuard]

  },
  {
    path: 'payment/:token',
    component:PaymentStandaloneComponent,
    canActivate: [authGuard]
  },
  {
    path:'download-invoice/:id',
    component:DownloadInvoicePdfComponent,
    canActivate: [authGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
