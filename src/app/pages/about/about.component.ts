import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor( private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("About Codemaster Mick");
// tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Who is Codemaster Mick anyways?" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
  }

}
