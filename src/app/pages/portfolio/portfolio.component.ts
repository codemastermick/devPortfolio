import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

const taglines = [
  "Here is some stuff I've made recently",
  "You wanted to see some actual code at work?",
  "Things made by me"
];

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {
  tagline: string;
  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Codemaster Mick's Portfolio");
    // tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Codemaster Mick's public work portfolio" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
    this.pickRandomTagline();
  }

  private pickRandomTagline() {

    this.tagline = taglines[Math.floor(Math.random() * taglines.length)];
  }

}
