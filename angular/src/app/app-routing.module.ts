import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'dashboard',
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard]
  },

  {
    path: 'plans',
    loadChildren: () => import('./features/plans/plans.module').then(m => m.PlansModule),
    canActivate: [authGuard]

  },

  {
    path: 'invoices',
    loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule),
    canActivate: [authGuard]

  },

  {
    path: 'customers',
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule),
    canActivate: [authGuard]
  },
  {
    path: 'integrations',
    loadChildren: () => import('./features/integrations/integrations.module').then(m => m.IntegrationsModule),
    canActivate: [authGuard]
  },
  {
    path: 'setup',
    loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule) ,
    canActivate: [authGuard]
  },
  { path: 'support', loadChildren: () => import('./features/support/support.module').then(m => m.SupportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
