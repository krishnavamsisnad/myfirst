import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriectivesComponent } from './driectives.component';

describe('DriectivesComponent', () => {
  let component: DriectivesComponent;
  let fixture: ComponentFixture<DriectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriectivesComponent]
    });
    fixture = TestBed.createComponent(DriectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
