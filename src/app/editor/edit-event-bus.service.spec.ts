import { TestBed } from '@angular/core/testing';

import { EditEventBusService } from './edit-event-bus.service';

describe('EditEventBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditEventBusService = TestBed.get(EditEventBusService);
    expect(service).toBeTruthy();
  });
});
