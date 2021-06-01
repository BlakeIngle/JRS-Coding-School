import { TestBed } from '@angular/core/testing';

import { AnimalAPIService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
