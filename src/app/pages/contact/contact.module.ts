import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { MaterialModule } from "../../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ContactRoutingModule, MaterialModule, FlexLayoutModule, FormsModule, ReactiveFormsModule],
  declarations: [ContactComponent]
})
export class ContactModule { }
