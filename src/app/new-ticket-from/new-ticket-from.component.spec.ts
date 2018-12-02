import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketFromComponent } from './new-ticket-from.component';

describe('NewTicketFromComponent', () => {
  let component: NewTicketFromComponent;
  let fixture: ComponentFixture<NewTicketFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
