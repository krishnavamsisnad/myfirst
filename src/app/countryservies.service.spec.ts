import { TestBed } from '@angular/core/testing';

import { CountryserviesService } from './countryservies.service';

describe('CountryserviesService', () => {
  let service: CountryserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
