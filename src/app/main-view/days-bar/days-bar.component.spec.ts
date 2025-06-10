import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysBarComponent } from './days-bar.component';

describe('DaysBarComponent', () => {
  let component: DaysBarComponent;
  let fixture: ComponentFixture<DaysBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
