import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStrandedOkayComponent } from './contact-stranded-okay.component';

describe('ContactStrandedOkayComponent', () => {
  let component: ContactStrandedOkayComponent;
  let fixture: ComponentFixture<ContactStrandedOkayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactStrandedOkayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStrandedOkayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
