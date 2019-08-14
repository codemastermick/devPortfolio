import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { FormControl, Validators } from "@angular/forms";

const taglines = [
  "Lets talk",
  "What's up?",
  "What can I help you with?"
];

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  tagline: string;

  name = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  message = new FormControl("", [Validators.required]);
  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Contact Codemaster Mick");
    // tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Get in touch with Codemaster Mick" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
    this.pickRandomTagline();
  }


  private pickRandomTagline() {
    this.tagline = taglines[Math.floor(Math.random() * taglines.length)];
  }

  getNameErrorMessage() {
    return this.name.hasError("required") ? "You must enter a name so I know who I am talking to" :
      this.name.hasError("name") ? "Not a valid email" :
        "";
  }

  getEmailErrorMessage() {
    return this.email.hasError("required") ? "You must enter an email address" :
      this.email.hasError("email") ? "Not a valid email" :
        "";
  }

  getMsgErrorMessage() {
    return this.message.hasError("required") ? "You must enter a message so I know what you need" :
      this.message.hasError("message") ? "Not a valid email" :
        "";
  }

  forgeMessage() {
    console.log(this.name.value + " at " + this.email.value + " would like to talk to you about " + this.message.value);
  }

  submit() {
    this.forgeMessage();
  }

}
