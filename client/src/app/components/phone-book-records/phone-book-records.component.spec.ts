import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookRecordsComponent } from './phone-book-records.component';

describe('PhoneBookRecordsComponent', () => {
  let component: PhoneBookRecordsComponent;
  let fixture: ComponentFixture<PhoneBookRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
