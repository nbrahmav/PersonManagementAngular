import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMgmtComponent } from './person-mgmt.component';

describe('PersonMgmtComponent', () => {
  let component: PersonMgmtComponent;
  let fixture: ComponentFixture<PersonMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
