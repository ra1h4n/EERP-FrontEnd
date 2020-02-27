import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddPurchaseComponent } from './purchases/add-purchase/add-purchase.component';
import { AddSaleComponent } from './sales/add-sale/add-sale.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ChartOfAccountComponent } from './accounts/chart-of-account/chart-of-account.component';
import { AddCategoryComponent } from './products/add-category/add-category.component';
import { AddBrandComponent } from './products/add-brand/add-brand.component';
import { ManageCustomerComponent } from './customers/manage-customer/manage-customer.component';
import { AddNewBankComponent } from './banks/add-new-bank/add-new-bank.component';
import { ManageBanksComponent } from './banks/manage-banks/manage-banks.component';
import { ManageSuppliersComponent } from './suppliers/manage-suppliers/manage-suppliers.component';


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
    path: 'products/add-category', component: AddCategoryComponent
  },
  {
    path: 'products/add-brand', component: AddBrandComponent
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
    path: 'suppliers/manage', component: ManageSuppliersComponent
  },
  {
    path: 'customers/add', component: AddCustomerComponent
  },
  {
    path: 'customers/manage', component: ManageCustomerComponent
  },
  {
    path: 'accounts/chart-of-account', component: ChartOfAccountComponent
  },
  {
    path: 'banks/add', component: AddNewBankComponent
  },
  {
    path: 'banks/manage', component: ManageBanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
