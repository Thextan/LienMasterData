import { TestBed } from '@angular/core/testing';

import { LiendataService } from './liendata.service';

describe('LiendataService', () => {
  let service: LiendataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiendataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
