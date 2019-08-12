import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "app/material/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { SidenavListComponent } from "../sidenav-list/sidenav-list.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let sidenav: SidenavListComponent;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [HeaderComponent],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    sidenav = new SidenavListComponent();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should toggle sidenav", () => {
    spy = spyOn(component.sidenavToggle, "emit");
    component.onToggleSidenav();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
