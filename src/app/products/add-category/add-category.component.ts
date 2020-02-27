import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private http: HttpClient, private cs: CommonService, private router: Router) { }

  model = new Category();
  ngOnInit() {

  }

  onSubmit() {
    this.http.post(this.cs.getApiURL() + "Categories/PostCategoryInfo", this.model).subscribe(
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
