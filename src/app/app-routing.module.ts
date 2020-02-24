import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddCompanyComponent } from './products/add-company/add-company.component';
import { AddPurchaseComponent } from './purchases/add-purchase/add-purchase.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'products/add', component: AddProductComponent
  },
  {
    path: 'products/add-company', component: AddCompanyComponent
  },
  {
    path: 'purchases/add', component: AddPurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
