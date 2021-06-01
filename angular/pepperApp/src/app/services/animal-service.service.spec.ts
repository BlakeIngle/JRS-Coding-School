import { TestBed } from '@angular/core/testing';

import { AnimalServiceService } from './animal-service.service';

describe('AnimalServiceService', () => {
  let service: AnimalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
