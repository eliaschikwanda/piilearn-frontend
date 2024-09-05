import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedQuestionYearDropdownComponent } from './selected-question-year-dropdown.component';

describe('SelectedQuestionYearDropdownComponent', () => {
  let component: SelectedQuestionYearDropdownComponent;
  let fixture: ComponentFixture<SelectedQuestionYearDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedQuestionYearDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedQuestionYearDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
