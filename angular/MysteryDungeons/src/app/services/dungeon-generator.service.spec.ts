import { TestBed } from '@angular/core/testing';

import { DungeonGeneratorService } from './dungeon-generator.service';

describe('DungeonGeneratorService', () => {
  let service: DungeonGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
