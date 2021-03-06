import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-manage-banks',
  templateUrl: './manage-banks.component.html',
  styleUrls: ['./manage-banks.component.css']
})
export class ManageBanksComponent implements OnInit {

  constructor(private http: HttpClient, private cs: CommonService) { }

  public modelData;
  ngOnInit() {
    this.http.get(this.cs.getApiURL() + "Banks/GetBankInfoes").subscribe(
      data => {
        this.modelData = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    );
  }

  editBank(bankCode) {
    console.log(bankCode);
  }

  deleteBank(bankCode) {
    this.http.delete(this.cs.getApiURL() + "Banks/DeleteBankInfo/" + bankCode).subscribe(
      data => {
        alert("Data Deletion Successful");
      },
      error => {
        alert("Error Occurred");
      }
    );
  }
}
