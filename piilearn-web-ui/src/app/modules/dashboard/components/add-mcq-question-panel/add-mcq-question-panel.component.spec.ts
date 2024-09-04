import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMcqQuestionPanelComponent } from './add-mcq-question-panel.component';

describe('AddMcqQuestionPanelComponent', () => {
  let component: AddMcqQuestionPanelComponent;
  let fixture: ComponentFixture<AddMcqQuestionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMcqQuestionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMcqQuestionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
