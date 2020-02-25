import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  model = new Customer();
  onSubmit() {
    console.log(this.model);

    this.router.navigate(['/dashboard']);
  }

}
