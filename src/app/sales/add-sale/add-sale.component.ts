import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/shared/models/sale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  constructor(private router: Router) { }

  // Bulk Data
  ProductNames = ["G607 14 Inch TV", "Redmi Note 5", "IPhoneX", "Google Pixel 4"];
  Brands = ["Sony", "Xiaomi", "Apple", "Google"];
  Categories = ["Television", "Mobile Phone"];
  Batches = ["Jan2020", "Feb2020", "Apr2018"]

  model = new Sale()
  ngOnInit() {
    this.model.AvailableQuantity = 99;
    this.model.ProductUnit = "Pcs"
  }

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/dashboard']);
  }

  updateTotal() {
    this.model.Total = (this.model.SaleQuantity * this.model.SaleRate) - (this.model.SaleQuantity * this.model.SaleRate * this.model.DiscountInPercent / 100)
  }

}
