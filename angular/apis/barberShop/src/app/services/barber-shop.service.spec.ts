import { TestBed } from '@angular/core/testing';

import { BarberShopService } from './barber-shop.service';

describe('BarberShopService', () => {
  let service: BarberShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarberShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
