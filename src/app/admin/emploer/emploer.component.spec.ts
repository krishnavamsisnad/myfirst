import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploerComponent } from './emploer.component';

describe('EmploerComponent', () => {
  let component: EmploerComponent;
  let fixture: ComponentFixture<EmploerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploerComponent]
    });
    fixture = TestBed.createComponent(EmploerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
