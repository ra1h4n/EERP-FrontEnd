import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  constructor(private http: HttpClient, private cs: CommonService) { }

  public modelData;
  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Customers/GetCustomerInfoes").subscribe(
      data => {
        this.modelData = data;
      },
      error => {
        console.log(error)
      }
    );
  }

}
