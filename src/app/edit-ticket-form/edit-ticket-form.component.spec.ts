import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketFormComponent } from './edit-ticket-form.component';

describe('EditTicketFormComponent', () => {
  let component: EditTicketFormComponent;
  let fixture: ComponentFixture<EditTicketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
