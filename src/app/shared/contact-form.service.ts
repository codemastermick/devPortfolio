import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ContactFormService {
  BASE_URL = environment.baseUrl;
  ENDPOINT = `${this.BASE_URL}/contact`;

  constructor(private http: HttpClient) { }

  uploadMessage(name: string, email: string, message: string) {
    if (environment.production) {
      return this.http.put(this.ENDPOINT, { name, email, message }).toPromise();
    } else {
      console.log("Skipping sending message because of local environment");
    }
  }
}
