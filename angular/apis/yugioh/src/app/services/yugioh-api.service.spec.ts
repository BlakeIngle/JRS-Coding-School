import { TestBed } from '@angular/core/testing';

import { YugiohAPIService } from './yugioh-api.service';

describe('YugiohAPIService', () => {
  let service: YugiohAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YugiohAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
