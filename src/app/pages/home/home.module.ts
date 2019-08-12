import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "../../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
