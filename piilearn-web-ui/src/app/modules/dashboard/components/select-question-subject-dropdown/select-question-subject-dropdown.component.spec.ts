import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionSubjectDropdownComponent } from './select-question-subject-dropdown.component';

describe('SelectQuestionSubjectDropdownComponent', () => {
  let component: SelectQuestionSubjectDropdownComponent;
  let fixture: ComponentFixture<SelectQuestionSubjectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuestionSubjectDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuestionSubjectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
