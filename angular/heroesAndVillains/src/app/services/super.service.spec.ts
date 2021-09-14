import { TestBed } from '@angular/core/testing';

import { SuperService } from './super.service';

describe('SuperService', () => {
  let service: SuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
