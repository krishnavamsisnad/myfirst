import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploydashbordComponent } from './employdashbord.component';

describe('EmploydashbordComponent', () => {
  let component: EmploydashbordComponent;
  let fixture: ComponentFixture<EmploydashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploydashbordComponent]
    });
    fixture = TestBed.createComponent(EmploydashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
