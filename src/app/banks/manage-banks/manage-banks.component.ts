import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-banks',
  templateUrl: './manage-banks.component.html',
  styleUrls: ['./manage-banks.component.css']
})
export class ManageBanksComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public modelData;
  ngOnInit() {
    this.http.get("http://localhost:60842/api/Banks").subscribe(
      data => {
        this.modelData = data;
      },
      error => {
        console.log(error)
      }
    );
  }

}
