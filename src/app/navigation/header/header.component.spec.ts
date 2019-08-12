import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "app/material/material.module";
import { By } from "@angular/platform-browser";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "app/firebaseconfig";
import { AngularFireAuth } from "@angular/fire/auth";
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
        AngularFireModule.initializeApp(firebaseConfig),
        RouterTestingModule
      ],
      declarations: [HeaderComponent],
      providers: [AngularFirestore, AngularFireAuth]
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
