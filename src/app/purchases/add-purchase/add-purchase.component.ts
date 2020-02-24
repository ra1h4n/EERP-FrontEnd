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

  model: Purchase = new Purchase();

  ngOnInit() {

  }

  onSubmit() {
    this.model.Total = this.model.Quantity * this.model.Rate;
    console.log(this.model);

    this.router.navigate(['/dashboard']);
  }

  updateTotal() {
    this.model.Total = Number((this.model.Quantity * this.model.Rate).toFixed(2));
  }
}
