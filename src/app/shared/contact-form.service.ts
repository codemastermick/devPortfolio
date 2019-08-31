import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContactFormService {

  constructor() { }

  uploadMessage(name: string, email: string, message: string) {
    if (name && email && message) {
      console.log(`${name} at ${email} would like to talk to you about ${message}`);
    } else {
      console.log("Could not upload message");
    }
  }
}
