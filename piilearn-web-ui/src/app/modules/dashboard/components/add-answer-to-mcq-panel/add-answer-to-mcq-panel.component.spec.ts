import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerToMcqPanelComponent } from './add-answer-to-mcq-panel.component';

describe('AddAnswerToMcqPanelComponent', () => {
  let component: AddAnswerToMcqPanelComponent;
  let fixture: ComponentFixture<AddAnswerToMcqPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnswerToMcqPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnswerToMcqPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
