import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/shared/models/supplier.model';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(private router: Router) { }

  model = new Supplier();
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/dashboard']);
  }

}
