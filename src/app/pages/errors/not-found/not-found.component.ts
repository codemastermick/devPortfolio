import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
import { Title, Meta } from "@angular/platform-browser";

const errors = [
  "Page not found",
  "Something went wrong",
  "It broke!",
  "Whoops!",
  "Did the typo goblin strike again?",
  "Well this is embarassing...",
  "This page is probably undergoing changes as you read this!"
]; // Add more error messages if desired

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  errorMsg: string; // Error message displayed to the user
  path: string; // Path the user might be trying to navigate to

  constructor(private route: ActivatedRoute, private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.errorMsg = errors[Math.floor(Math.random() * errors.length)];
    this.route.data.pipe(take(1)).subscribe((data: { path: string }) => {
      this.path = data.path;
    });
    this.titleService.setTitle(this.errorMsg);
    // tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: "description", content: "Codemaster Mick broke something!" });
    this.metaTagService.updateTag({ name: "author", content: "Mick Evans" });
    this.metaTagService.updateTag({ name: "robots", content: "index, follow" });
  }
}
