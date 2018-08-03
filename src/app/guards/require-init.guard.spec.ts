import { TestBed, async, inject } from '@angular/core/testing';

import { RequireInitGuard } from './require-init.guard';

describe('RequireInitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireInitGuard]
    });
  });

  it('should ...', inject([RequireInitGuard], (guard: RequireInitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
