import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

const taglines = [
  "Welcome to my corner of the internet",
  "How can I help you today?",
  "Hey you found me!",
  "Making the world better (or worse) one project at a time"
];

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  tagline: string;
  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Codemaster Mick");
    // tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Codemaster Mick's public profile and work portfolio" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
    this.pickRandomTagline();
  }

  private pickRandomTagline() {

    this.tagline = taglines[Math.floor(Math.random() * taglines.length)];
  }

}
