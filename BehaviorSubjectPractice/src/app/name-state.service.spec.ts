import { TestBed } from '@angular/core/testing';

import { NameStateService } from './name-state.service';

describe('NameStateService', () => {
  let service: NameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
