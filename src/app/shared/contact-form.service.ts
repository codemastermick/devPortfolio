import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ContactFormService {
  BASE_URL = environment.api_base_url;
  ENDPOINT = `${this.BASE_URL}/contact`;

  constructor(private http: HttpClient) { }

  uploadMessage(name: string, email: string, message: string) {
    if (name && email && message) {
      this.http.put(this.ENDPOINT, { name, email, message }).toPromise().then(res => {
        return `${JSON.stringify(res)}`;
      }).catch(err => {
        return err;
      });
    }
  }
}
