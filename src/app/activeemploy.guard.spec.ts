import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activeemployGuard } from './activeemploy.guard';

describe('activeemployGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activeemployGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
