import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have founding year`, () => {
    expect(component.foundingYear).not.toBeNull();
  });

  it(`should have author`, () => {
    expect(component.author).not.toBeNull();
  });

  it(`should have datestamp`, () => {
    expect(component.datestamp).not.toBeNull();
  });

  it(`should have valid datestamp`, () => {
    expect(component.datestamp.length > 0).toBeTruthy();
  });

  it(`should have currentYear`, () => {
    expect(component.currentYear).not.toBeNull();
  });

  it(`getRange should not be null`, () => {
    spyOn(component, "getRange");
    fixture.detectChanges();
    expect(component.getRange()).not.toBeNull();
  });

  it(`getRange should return single year`, () => {
    spyOn(component, "getRange");
    fixture.detectChanges();
    expect(component.datestamp).toBe("2019");
  });

  it(`getRange should return a range`, () => {
    component.foundingYear = 2018;
    component.datestamp = component.getRange();
    fixture.detectChanges();
    expect(component.datestamp).toBe("2018-2019");
  });
});
