import { TestBed } from '@angular/core/testing';

import { PokemonAPIService } from './pokemon-api.service';

describe('PokemonAPIService', () => {
  let service: PokemonAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
