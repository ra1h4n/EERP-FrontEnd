import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule } from "@angular/forms";
import { AddPurchaseComponent } from './purchases/add-purchase/add-purchase.component';
import { AddSaleComponent } from './sales/add-sale/add-sale.component';
import { AddSupplierComponent } from './suppliers/add-supplier/add-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    AddProductComponent,
    AddPurchaseComponent,
    AddSaleComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
