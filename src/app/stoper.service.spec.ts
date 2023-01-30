import { TestBed } from '@angular/core/testing';

import { StoperService } from './stoper.service';

describe('StoperService', () => {
  let service: StoperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
