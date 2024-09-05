import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionSeasonDropdownComponent } from './select-question-season-dropdown.component';

describe('SelectQuestionSeasonDropdownComponent', () => {
  let component: SelectQuestionSeasonDropdownComponent;
  let fixture: ComponentFixture<SelectQuestionSeasonDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuestionSeasonDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuestionSeasonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
