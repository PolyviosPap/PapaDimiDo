import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysWindowComponent } from './days-window.component';

describe('DaysWindowComponent', () => {
  let component: DaysWindowComponent;
  let fixture: ComponentFixture<DaysWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
