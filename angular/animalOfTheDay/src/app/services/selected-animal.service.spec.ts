import { TestBed } from '@angular/core/testing';

import { SelectedAnimalService } from './selected-animal.service';

describe('SelectedAnimalService', () => {
  let service: SelectedAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
