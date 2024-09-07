import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel1ViewMcqComponent } from './panel-1-view-mcq.component';

describe('Panel1ViewMcqComponent', () => {
  let component: Panel1ViewMcqComponent;
  let fixture: ComponentFixture<Panel1ViewMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panel1ViewMcqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panel1ViewMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
