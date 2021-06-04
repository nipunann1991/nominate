import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJourneyComponent } from './view-journey.component';

describe('ViewJourneyComponent', () => {
  let component: ViewJourneyComponent;
  let fixture: ComponentFixture<ViewJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
