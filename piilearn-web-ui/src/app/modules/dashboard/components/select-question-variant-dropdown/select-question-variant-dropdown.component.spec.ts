import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionVariantDropdownComponent } from './select-question-variant-dropdown.component';

describe('SelectQuestionVariantDropdownComponent', () => {
  let component: SelectQuestionVariantDropdownComponent;
  let fixture: ComponentFixture<SelectQuestionVariantDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuestionVariantDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuestionVariantDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
