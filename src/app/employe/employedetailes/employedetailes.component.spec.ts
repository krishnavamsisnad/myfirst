import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedetailesComponent } from './employedetailes.component';

describe('EmployedetailesComponent', () => {
  let component: EmployedetailesComponent;
  let fixture: ComponentFixture<EmployedetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployedetailesComponent]
    });
    fixture = TestBed.createComponent(EmployedetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
