import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Some Bulk Data
  Suppliers = ["Best Electronics", "Vision Electronics", "MK Electronics", "Chowdhury Electronics"]
  Categories = ["Television", "Refrigerator", "Display", "Air Conditionar", "Air Cooler"]
  Brands = ["Sony", "Walton", "Samsung", "Vision", "Hundai", "Singer"]

  model = new Product();

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/dashboard']);
  }


}
