import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMcqQuestionComponent } from './add-mcq-question.component';

describe('AddMcqQuestionComponent', () => {
  let component: AddMcqQuestionComponent;
  let fixture: ComponentFixture<AddMcqQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMcqQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMcqQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
