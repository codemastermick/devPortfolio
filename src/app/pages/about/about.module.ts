import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, AboutRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
