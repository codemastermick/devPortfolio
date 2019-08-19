import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidenavListComponent } from "./sidenav-list/sidenav-list.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [RouterModule, MaterialModule, FlexLayoutModule],
  declarations: [HeaderComponent, FooterComponent, SidenavListComponent],
  exports: [HeaderComponent, FooterComponent, SidenavListComponent]
})
export class NavigationModule {}
