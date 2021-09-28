import { TestBed } from '@angular/core/testing';

import { ForceLoginGuard } from './force-login.guard';

describe('ForceLoginGuard', () => {
  let guard: ForceLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForceLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
