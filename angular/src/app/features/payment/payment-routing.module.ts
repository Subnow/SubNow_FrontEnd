import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { PaymentLayoutComponent } from '../../custom-core/components/layout/payment-layout/payment-layout.component';

const routes: Routes = [
  { path: '', component: PaymentLayoutComponent ,
        children:[
          {
            path:'',
            component:PaymentComponent
          }
        ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
