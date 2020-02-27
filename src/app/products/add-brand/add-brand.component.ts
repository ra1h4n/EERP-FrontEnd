import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { Brand } from 'src/app/shared/models/brand.model';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cs: CommonService) { }

  model = new Brand();
  ngOnInit() {
  }

  onSubmit() {
    this.http.post(this.cs.getApiURL() + "Brands/PostBrandInfo", this.model).subscribe(
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
