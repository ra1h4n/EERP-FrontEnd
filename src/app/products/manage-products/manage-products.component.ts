import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private http: HttpClient, private cs: CommonService) { }

  public modelData;
  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Products/GetProductInfoes").subscribe(
      data => {
        this.modelData = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    );
  }

  editProduct(productCode) {
    console.log(productCode);
  }

  deleteProduct(productCode) {
    this.http.delete(this.cs.getApiURL() + "Products/DeleteProductInfo/" + productCode).subscribe(
      data => {
        alert("Data Deletion Successful");
        this.ngOnInit()
      },
      error => {
        alert("Error Occurred");
      }
    );
  }

}
