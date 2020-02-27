import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/shared/models/bank.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-new-bank',
  templateUrl: './add-new-bank.component.html',
  styleUrls: ['./add-new-bank.component.css']
})
export class AddNewBankComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cs: CommonService) { }

  model = new Bank();
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);

    this.http.post(this.cs.getApiURL() + "Banks/PostBankInfo", this.model, {
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
