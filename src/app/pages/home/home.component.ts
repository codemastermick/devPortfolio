import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor( private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Codemaster Mick");
// tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Codemaster Mick's public profile and work portfolio" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
  }

}
