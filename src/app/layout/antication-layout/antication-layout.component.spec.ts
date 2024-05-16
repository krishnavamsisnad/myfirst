import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticationLayoutComponent } from './antication-layout.component';

describe('AnticationLayoutComponent', () => {
  let component: AnticationLayoutComponent;
  let fixture: ComponentFixture<AnticationLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnticationLayoutComponent]
    });
    fixture = TestBed.createComponent(AnticationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
