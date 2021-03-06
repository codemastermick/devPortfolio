import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { MaterialModule } from "app/shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ContactFormService } from "app/shared/contact-form.service";

const mock = {
  name: "Demo Bob",
  email: "demobob@fakemail.net",
  message: "This is a better message, since it meets the minimum length requirements"
};

const badMock = {
  name: "&nbsp;",
  email: "demobob#fakemail.net",
  message: "Hello world",
  shortname: "a",
  // tslint:disable-next-line: max-line-length
  longmessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: ContactFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
      declarations: [ContactComponent],
      providers: [ContactFormService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ContactFormService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not error when filled out", () => {
    component.name.setValue(mock.name);
    component.email.setValue(mock.email);
    component.message.setValue(mock.message);
    fixture.detectChanges();
    expect(component.name.valid).toBeTruthy();
    expect(component.email.valid).toBeTruthy();
    expect(component.message.valid).toBeTruthy();
  });

  it("should error when not filled out", () => {
    expect(component.name.valid).toBeFalsy();
    expect(component.email.valid).toBeFalsy();
    expect(component.message.valid).toBeFalsy();
  });

  it("should submit a filled form", () => {
    component.name.setValue(mock.name);
    component.email.setValue(mock.email);
    component.message.setValue(mock.message);

    spyOn(component, "submit");
    // spyOn(service, "uploadMessage");

    const button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();
    expect(component.submit).toHaveBeenCalled();
    // expect(service.uploadMessage).toHaveBeenCalled();
  });

  it("should upload a message on submit", async () => {
    component.name.setValue(mock.name);
    component.email.setValue(mock.email);
    component.message.setValue(mock.message);
    const spy = spyOn(service, "uploadMessage");
    await component.submit();
    expect(spy).toHaveBeenCalled();
  });

  // BEGIN NAME TESTS
  it("should error without a name", () => {
    expect(component.name.valid).toBeFalsy();
  });

  it("should not error with a name", () => {
    component.name.setValue(mock.name);
    fixture.detectChanges();
    expect(component.getNameErrorMessage()).toEqual("");
  });

  it("should return the correct error on no name", () => {
    expect(component.getNameErrorMessage()).toEqual("You must enter a name so I know who I am talking to");
  });

  it("should return the correct error on a short name", () => {
    component.name.setValue(badMock.shortname);
    fixture.detectChanges();
    expect(component.getNameErrorMessage()).toEqual("Please enter a name that is at least 2 characters");
  });

  it("should return the correct error on a bad name", () => {
    component.name.setValue(badMock.name);
    fixture.detectChanges();
    expect(component.getNameErrorMessage()).toEqual("You have entered an invalid character");
  });
  // END NAME TESTS

  // BEGIN EMAIL TESTS
  it("should error without an email", () => {
    expect(component.email.valid).toBeFalsy();
  });

  it("should not error with a email", () => {
    component.email.setValue(mock.email);
    fixture.detectChanges();
    expect(component.getEmailErrorMessage()).toEqual("");
  });

  it("should return the correct error on a blank email", () => {
    expect(component.getEmailErrorMessage()).toEqual("You must enter an email address or I won't be able to get back to you");
  });

  it("should return the correct error on a badly formatted email", () => {
    component.email.setValue(badMock.email);
    fixture.detectChanges();
    expect(component.getEmailErrorMessage()).toEqual("Not a valid email address");
  });
  // END EMAIL TESTS

  // BEGIN MESSAGE TESTS
  it("should error without a message", () => {
    expect(component.message.valid).toBeFalsy();
  });

  it("should not error with a message", () => {
    component.message.setValue(mock.message);
    fixture.detectChanges();
    expect(component.getMsgErrorMessage()).toEqual("");
  });

  it("should return the correct error on a blank message", () => {
    expect(component.getMsgErrorMessage()).toEqual("You must enter a message so I know what you need");
  });

  it("should return the correct error on a short message", () => {
    component.message.setValue(badMock.message);
    fixture.detectChanges();
    expect(component.getMsgErrorMessage()).toEqual("Please enter at least 20 characters for your message");
  });

  it("should return the correct error on a long message", () => {
    component.message.setValue(badMock.longmessage);
    fixture.detectChanges();
    expect(component.getMsgErrorMessage()).toEqual("Message too long. Maximum 1000 characters");
  });
  // END MESSAGE TESTS
});
