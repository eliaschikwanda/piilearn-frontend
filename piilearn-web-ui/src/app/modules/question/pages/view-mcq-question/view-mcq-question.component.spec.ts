import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMcqQuestionComponent } from './view-mcq-question.component';

describe('ViewMcqQuestionComponent', () => {
  let component: ViewMcqQuestionComponent;
  let fixture: ComponentFixture<ViewMcqQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMcqQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMcqQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
