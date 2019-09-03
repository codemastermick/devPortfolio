import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, PortfolioRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [PortfolioComponent]
})
export class PortfolioModule {}
