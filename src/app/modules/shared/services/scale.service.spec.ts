import { TestBed } from '@angular/core/testing';

import { ScaleService } from './scale.service';

describe('ScaleService', () => {
  let service: ScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
