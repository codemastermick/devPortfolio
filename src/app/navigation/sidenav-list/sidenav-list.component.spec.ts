import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavListComponent } from "./sidenav-list.component";
import { MaterialModule } from "app/material/material.module";

describe("SidenavListComponent", () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavListComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should toggle sidenav", () => {
    spy = spyOn(component.sidenavClose, "emit");
    component.onSidenavClose();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
