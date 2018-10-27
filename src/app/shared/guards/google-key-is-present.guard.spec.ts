import { TestBed, async, inject } from '@angular/core/testing';

import { GoogleKeyIsPresentGuard } from './google-key-is-present.guard';

describe('GoogleKeyIsPresentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleKeyIsPresentGuard]
    });
  });

  it('should ...', inject([GoogleKeyIsPresentGuard], (guard: GoogleKeyIsPresentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
