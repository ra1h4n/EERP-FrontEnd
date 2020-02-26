import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/shared/models/bank.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-bank',
  templateUrl: './add-new-bank.component.html',
  styleUrls: ['./add-new-bank.component.css']
})
export class AddNewBankComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  model = new Bank();
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);

    this.http.post("http://localhost:60842/api/Banks", this.model, {
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
