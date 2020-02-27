import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/shared/models/supplier.model';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private cs: CommonService) { }

  model = new Supplier();
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.http.post(this.cs.getApiURL() + "Suppliers/PostSupplierInfo", this.model).subscribe(
      data => {
        alert("Data Entry Success!");
      },
      error => {
        alert("Failed. Try agin please!");
      }
    );

    this.router.navigate(['/dashboard']);
  }

}
