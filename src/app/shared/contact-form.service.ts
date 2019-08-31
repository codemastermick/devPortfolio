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
    const body = {
      "name": name,
      "email": email,
      "message": message
    };

    if (name && email && message) {
      console.log(`${name} at ${email} would like to talk to you about ${message}`);
      this.http.put(this.ENDPOINT, body).toPromise().then(res => {
        console.log(`Uploaded message with UID ${res}`);
      }).catch(err => {
        console.log(err);
      })
    } else {
      console.log("Could not upload message");
    }
  }
}
