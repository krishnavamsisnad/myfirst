import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfromComponent } from './studentfrom.component';

describe('StudentfromComponent', () => {
  let component: StudentfromComponent;
  let fixture: ComponentFixture<StudentfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentfromComponent]
    });
    fixture = TestBed.createComponent(StudentfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
