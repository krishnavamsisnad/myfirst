import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalecustotComponent } from './malecustot.component';

describe('MalecustotComponent', () => {
  let component: MalecustotComponent;
  let fixture: ComponentFixture<MalecustotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MalecustotComponent]
    });
    fixture = TestBed.createComponent(MalecustotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
