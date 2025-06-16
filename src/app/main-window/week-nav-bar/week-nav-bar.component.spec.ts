import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNavBarComponent } from './week-nav-bar.component';

describe('WeekNavBarComponent', () => {
  let component: WeekNavBarComponent;
  let fixture: ComponentFixture<WeekNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
