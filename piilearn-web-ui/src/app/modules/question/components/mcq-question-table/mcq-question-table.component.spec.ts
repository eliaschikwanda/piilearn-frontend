import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqQuestionTableComponent } from './mcq-question-table.component';

describe('McqQuestionTableComponent', () => {
  let component: McqQuestionTableComponent;
  let fixture: ComponentFixture<McqQuestionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McqQuestionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McqQuestionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
