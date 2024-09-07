import { TestBed } from '@angular/core/testing';

import { McqCommunicationServiceService } from './mcq-communication-service.service';

describe('McqCommunicationServiceService', () => {
  let service: McqCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
