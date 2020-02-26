import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public modelData;
  ngOnInit() {
    this.http.get("http://localhost:60842/api/Customers").subscribe(
      data => {
        this.modelData = data;
      },
      error => {
        console.log(error)
      }
    );
  }

}
