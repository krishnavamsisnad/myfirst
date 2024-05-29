import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiactivedashboardComponent } from './diactivedashboard.component';

describe('DiactivedashboardComponent', () => {
  let component: DiactivedashboardComponent;
  let fixture: ComponentFixture<DiactivedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiactivedashboardComponent]
    });
    fixture = TestBed.createComponent(DiactivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
