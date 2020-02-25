import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddPurchaseComponent } from './purchases/add-purchase/add-purchase.component';
import { AddSaleComponent } from './sales/add-sale/add-sale.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';


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
    path: 'purchases/add', component: AddPurchaseComponent
  },
  {
    path: 'sales/add', component: AddSaleComponent
  },
  {
    path: 'suppliers/add', component: AddSupplierComponent
  },
  {
    path: 'customers/add', component: AddCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
