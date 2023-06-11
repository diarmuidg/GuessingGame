import { TestBed } from '@angular/core/testing';

import { SvgMapService } from './svg-map.service';

describe('SvgMapService', () => {
  let service: SvgMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
