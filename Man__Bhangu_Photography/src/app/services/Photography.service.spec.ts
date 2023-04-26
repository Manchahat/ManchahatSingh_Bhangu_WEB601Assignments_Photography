import { TestBed } from '@angular/core/testing';

import { PhotographyService } from './Photography.service';

describe('PhotographyService', () => {
  let service: PhotographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
