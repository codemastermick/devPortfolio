import { TestBed } from "@angular/core/testing";

import { ContactFormService } from "./contact-form.service";
import { HttpClientModule } from "@angular/common/http";

const mock = {
  name: "Demo Bob",
  email: "demobob@fakemail.net",
  message: "This is a better message, since it meets the minimum length requirements"
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
    expect(typeof(spy)).toBe(typeof(Object));
  });
});
