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

  modelHead = new Sale();
  models: Array<Sale> = [];

  ngOnInit() {
    this.modelHead.SaleDate = new Date().toString();

    let first = new Sale();
    first.AvailableQuantity = 10;
    first.ProductUnit = "PCs";
    this.models.push(first);
  }

  onSubmit() {
    console.log(this.models);
    this.router.navigate(['/dashboard']);
  }

  updateTotal(rowIndex) {
    this.models[rowIndex].Total = (this.models[rowIndex].SaleQuantity * this.models[rowIndex].SaleRate) - (this.models[rowIndex].SaleQuantity * this.models[rowIndex].SaleRate * this.models[rowIndex].DiscountInPercent / 100);
  }

  addRow() {
    // console.log(rowIndex);
    let newRow = new Sale();
    newRow.ProductUnit = "Dyn";
    this.models.push(newRow);

    console.log(this.models);
    return true;
  }

  removeRow(rowIndex) {
    console.log(rowIndex);
    if (this.models.length == 1) {
      return false;
    } else {
      this.models.splice(rowIndex, 1);
      return true;
    }
  }

}
