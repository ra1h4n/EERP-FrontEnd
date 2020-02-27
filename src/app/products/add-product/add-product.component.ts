import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cs: CommonService) { }


  // Some Bulk Data
  public Suppliers; //= ["Best Electronics", "Vision Electronics", "MK Electronics", "Chowdhury Electronics"]
  public Categories; //= ["Television", "Refrigerator", "Display", "Air Conditionar", "Air Cooler"]
  public Brands; //= ["Sony", "Walton", "Samsung", "Vision", "Hundai", "Singer"]

  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Suppliers/GetSupplierInfoes").subscribe(
      data => {
        this.Suppliers = data;
        console.log(data);
      },
      error => {
        alert("Error occurred. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Categories/GetCategoryInfoes").subscribe(
      data => {
        this.Categories = data;
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Brands/GetBrandInfoes").subscribe(
      data => {
        this.Brands = data;
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );
  }

  model = new Product();

  onSubmit() {
    console.log(this.model);
    this.model.ProductSupplier = Number(this.model.ProductSupplier);
    this.model.ProductCategory = Number(this.model.ProductCategory);
    this.model.ProductBrand = Number(this.model.ProductBrand);

    console.log("----------------------------")
    console.log(this.model);
    this.http.post(this.cs.getApiURL() + "Products/PostProductInfo", this.model, {
      headers: { "Content-Type": "application/json" }
    }).subscribe(
      data => {
        alert("data record success");
      },
      error => {
        alert("error! try agin please");
      }
    );

    this.router.navigate(['/dashboard']);
  }

  onSupplierChange(event) {
    console.log(event);
    console.log(this.model.ProductSupplier);
  }
}
