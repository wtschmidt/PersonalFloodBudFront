import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSafeMovingComponent } from './contact-safe-moving.component';

describe('ContactSafeMovingComponent', () => {
  let component: ContactSafeMovingComponent;
  let fixture: ComponentFixture<ContactSafeMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSafeMovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSafeMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
