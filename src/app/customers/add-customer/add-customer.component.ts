import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cs: CommonService) { }

  ngOnInit() {
  }

  model = new Customer();
  onSubmit() {
    console.log(this.model);

    this.http.post(this.cs.getApiURL() + "Customers/PostCustomerInfo", this.model, {
      headers: { "Content-Type": "application/json" }
    }).subscribe(
      data => {
        alert("Data Entry Success");
      },
      error => {
        alert("Error Occured");
      }
    );

    this.router.navigate(['/dashboard']);
  }

}
