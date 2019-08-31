import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { NavigationModule } from "./navigation/navigation.module";
import { ContactFormService } from "./shared/contact-form.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
