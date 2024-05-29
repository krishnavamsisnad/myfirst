import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivedashboardComponent } from './activedashboard.component';

describe('ActivedashboardComponent', () => {
  let component: ActivedashboardComponent;
  let fixture: ComponentFixture<ActivedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivedashboardComponent]
    });
    fixture = TestBed.createComponent(ActivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
