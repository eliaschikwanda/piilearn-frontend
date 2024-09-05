import { TestBed } from '@angular/core/testing';

import { QuestionIdSaveService } from './questionIdSave.service';

describe('QuestionService', () => {
  let service: QuestionIdSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionIdSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
