import { TestBed } from '@angular/core/testing';

import { SvgMapServiceService } from './svg-map-service.service';

describe('SvgMapServiceService', () => {
  let service: SvgMapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgMapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
