import { TestBed } from '@angular/core/testing';

import { AutoprintService } from './autoprint.service';

describe('AutoprintService', () => {
  let service: AutoprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
