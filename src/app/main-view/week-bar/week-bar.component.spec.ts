import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekBarComponent } from './week-bar.component';

describe('WeekBarComponent', () => {
  let component: WeekBarComponent;
  let fixture: ComponentFixture<WeekBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
