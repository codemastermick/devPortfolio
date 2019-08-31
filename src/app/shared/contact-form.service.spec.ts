import { TestBed } from "@angular/core/testing";

import { ContactFormService } from "./contact-form.service";
import { HttpClientModule } from "@angular/common/http";

describe("ContactFormService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it("should be created", () => {
    const service: ContactFormService = TestBed.get(ContactFormService);
    expect(service).toBeTruthy();
  });
});
