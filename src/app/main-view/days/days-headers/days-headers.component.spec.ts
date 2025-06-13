import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysHeadersComponent } from './days-headers.component';

describe('DaysHeadersComponent', () => {
  let component: DaysHeadersComponent;
  let fixture: ComponentFixture<DaysHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysHeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
