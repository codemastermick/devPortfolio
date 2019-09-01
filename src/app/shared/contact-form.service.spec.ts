import { TestBed } from "@angular/core/testing";

import { ContactFormService } from "./contact-form.service";
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";

const mock = {
  name: "Demo Bob",
  email: "demobob@fakemail.net",
  message: "This is a demo message sent from the automated testing facilities in Karma"
};

describe("ContactFormService", () => {
  let service: ContactFormService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  beforeEach(() => {
    service = TestBed.get(ContactFormService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should upload a message", async () => {
    const spy = spyOn(service, "uploadMessage");
    await service.uploadMessage(mock.name, mock.email, mock.message);
    expect(spy).toHaveBeenCalled();
  });

  it("should 404 when the endpoint is unreachable", async () => {
    service.BASE_URL = "http://127.0.0.1";
    service.ENDPOINT = "/fake";
    let RESULT: any;
    await service.uploadMessage(mock.name, mock.email, mock.message).then(res => {
      RESULT = JSON.stringify(res);
    }).catch((err: HttpErrorResponse) => {
      RESULT = err.status;
    });
    expect(RESULT).toEqual(404);
  });
});
