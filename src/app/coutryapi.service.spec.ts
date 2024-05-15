import { TestBed } from '@angular/core/testing';

import { CoutryapiService } from './coutryapi.service';

describe('CoutryapiService', () => {
  let service: CoutryapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoutryapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
