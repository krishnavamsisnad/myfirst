import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmplestyleComponent } from './exmplestyle.component';

describe('ExmplestyleComponent', () => {
  let component: ExmplestyleComponent;
  let fixture: ComponentFixture<ExmplestyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExmplestyleComponent]
    });
    fixture = TestBed.createComponent(ExmplestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
