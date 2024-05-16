import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCumsterComponent } from './sub-cumster.component';

describe('SubCumsterComponent', () => {
  let component: SubCumsterComponent;
  let fixture: ComponentFixture<SubCumsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCumsterComponent]
    });
    fixture = TestBed.createComponent(SubCumsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
