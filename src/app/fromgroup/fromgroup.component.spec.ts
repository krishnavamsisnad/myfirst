import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromgroupComponent } from './fromgroup.component';

describe('FromgroupComponent', () => {
  let component: FromgroupComponent;
  let fixture: ComponentFixture<FromgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromgroupComponent]
    });
    fixture = TestBed.createComponent(FromgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
