import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiURL = "http://localhost:60842/r/"

  constructor() { }

  public getApiURL() {
    return this.apiURL;
  }
}
