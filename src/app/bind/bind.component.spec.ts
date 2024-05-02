import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindComponent } from './bind.component';

describe('BindComponent', () => {
  let component: BindComponent;
  let fixture: ComponentFixture<BindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindComponent]
    });
    fixture = TestBed.createComponent(BindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
