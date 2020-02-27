import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  constructor(private http: HttpClient, private cs: CommonService) { }

  public modelData;
  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Suppliers/GetSupplierInfoes").subscribe(
      data => {
        this.modelData = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    );
  }

  editSupplier(supplierCode) {
    console.log(supplierCode);
  }

  deleteSupplier(supplierCode) {
    this.http.delete(this.cs.getApiURL() + "Suppliers/DeleteSupplierInfo/" + supplierCode).subscribe(
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
