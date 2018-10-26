import { TestBed, async, inject } from '@angular/core/testing';

import { PreviewPlayerGuard } from './preview-player-guard.service';

describe('PreviewPlayerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewPlayerGuard]
    });
  });

  it('should ...', inject([PreviewPlayerGuard], (guard: PreviewPlayerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
