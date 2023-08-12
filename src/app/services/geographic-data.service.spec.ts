import { TestBed } from '@angular/core/testing';

import { GeographicDataService } from './geographic-data.service';

describe('GeographicDataService', () => {
  let service: GeographicDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeographicDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
