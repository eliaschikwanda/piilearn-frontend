import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMcqOptionsPanelComponent } from './add-mcq-options-panel.component';

describe('AddMcqOptionsPanelComponent', () => {
  let component: AddMcqOptionsPanelComponent;
  let fixture: ComponentFixture<AddMcqOptionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMcqOptionsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMcqOptionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
