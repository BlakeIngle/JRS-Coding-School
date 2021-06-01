import { TestBed } from '@angular/core/testing';

import { PepperService } from './pepper.service';

describe('PepperService', () => {
  let service: PepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
