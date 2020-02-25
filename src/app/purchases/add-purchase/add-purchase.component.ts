import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/models/purchase.model';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  constructor(private router: Router) { }

  // Bulk Data
  ProductNames = ["G607 14 Inch TV", "Redmi Note 5", "IPhoneX", "Google Pixel 4"];
  Brands = ["Sony", "Xiaomi", "Apple", "Google"];
  Categories = ["Television", "Mobile Phone"];

  modelHead = new Purchase();
  models: Array<Purchase> = [];

  ngOnInit() {
    let first = new Purchase();
    first.Quantity = 25;
    this.models.push(first);
  }

  onSubmit() {
    console.log(this.modelHead)
    console.log(this.models);

    this.router.navigate(['/dashboard']);
  }

  updateTotal(rowIndex) {
    this.models[rowIndex].Total = Number((this.models[rowIndex].Quantity * this.models[rowIndex].Rate).toFixed(2));
  }

  addRow() {
    let newRow = new Purchase();
    newRow.Quantity = 20;
    newRow.Rate = 25;
    this.models.push(newRow);
  }

  removeRow(rowIndex) {
    if (this.models.length == 1) {
      // Can't Delete Bro. You got only one ROW.
      return false;
    } else {
      this.models.splice(rowIndex, 1);
      return true;
    }
  }
}
