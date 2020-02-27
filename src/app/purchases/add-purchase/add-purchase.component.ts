import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/models/purchase.model';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';
import { Stock } from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cs: CommonService) { }

  // Bulk Data
  public ProductNames = [];
  public Brands = [];
  public Categories = [];

  modelHead = new Purchase();
  models: Array<Purchase> = [];

  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Categories/GetCategoryInfoes").subscribe(
      data => {
        this.Categories.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Brands/GetBrandInfoes").subscribe(
      data => {
        this.Brands.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Products/GetProductInfoes").subscribe(
      data => {
        console.log(data);
        this.ProductNames.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );


    this.modelHead.PurchaseDate = new Date();
    let first = new Purchase();
    first.Quantity = 25;
    this.models.push(first);
  }

  onSubmit() {
    // console.log(this.modelHead)
    // console.log(this.models);

    this.models.forEach(product => {
      let stockModel = new Stock();
      stockModel.StockDate = this.modelHead.PurchaseDate;
      stockModel.ProductBatch = this.modelHead.BatchNo;
      stockModel.ProductCode = product.ProductName; // Gotta do something
      stockModel.ProductQuantity = product.Quantity;
      stockModel.ProductRate = product.Rate;
      this.http.post(this.cs.getApiURL() + "Stocks/PostStockInfo", stockModel, {
        headers: { "Content-Type": "application/json" }
      }).subscribe(
        data => {
          console.log("ok");
        },
        error => {
          alert("Error Occured. Try again please");
        }
      );
    });

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

    this.http.get(this.cs.getApiURL() + "Categories/GetCategoryInfoes").subscribe(
      data => {
        this.Categories.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Brands/GetBrandInfoes").subscribe(
      data => {
        this.Brands.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );

    this.http.get(this.cs.getApiURL() + "Products/GetProductInfoes").subscribe(
      data => {
        console.log(data);
        this.ProductNames.push(data);
      },
      error => {
        alert("Error occurred.. try reloading the page.");
      }
    );
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

  onCategoryChange(event, i) {
    // console.log(event);
    this.http.get(this.cs.getApiURL() + "Products/GetBrandsFromCategory?category=" + event).subscribe(
      data => {
        this.Brands[i] = data;
        console.log(this.Brands);
      },
      error => {
        console.log(error);
      }
    );
  }

  onBrandChange(event, i) {
    this.http.get(this.cs.getApiURL() + "Products/GetProductsFromBrand?category=" + this.models[i].Category + "&brand=" + event).subscribe(
      data => {
        console.log(data);
        this.ProductNames[i] = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  OnProductSelect(event, i) {
    //Do nothing
  }
}
