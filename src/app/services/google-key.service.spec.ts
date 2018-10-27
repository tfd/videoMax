import { TestBed } from '@angular/core/testing';

import { GoogleKeyService } from './google-key.service';

describe('GoogleKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleKeyService = TestBed.get(GoogleKeyService);
    expect(service).toBeTruthy();
  });
});
