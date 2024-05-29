import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResigtertionComponent } from './resigtertion.component';

describe('ResigtertionComponent', () => {
  let component: ResigtertionComponent;
  let fixture: ComponentFixture<ResigtertionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResigtertionComponent]
    });
    fixture = TestBed.createComponent(ResigtertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
