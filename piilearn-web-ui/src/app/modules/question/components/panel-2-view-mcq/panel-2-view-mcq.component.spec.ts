import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2ViewMcqComponent } from './panel-2-view-mcq.component';

describe('Panel2ViewMcqComponent', () => {
  let component: Panel2ViewMcqComponent;
  let fixture: ComponentFixture<Panel2ViewMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panel2ViewMcqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panel2ViewMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
