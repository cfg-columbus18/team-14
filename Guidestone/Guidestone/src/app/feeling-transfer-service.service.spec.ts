import { TestBed } from '@angular/core/testing';

import { FeelingTransferServiceService } from './feeling-transfer-service.service';

describe('FeelingTransferServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeelingTransferServiceService = TestBed.get(FeelingTransferServiceService);
    expect(service).toBeTruthy();
  });
});
