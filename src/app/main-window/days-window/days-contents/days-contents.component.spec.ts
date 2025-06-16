import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysContentsComponent } from './days-contents.component';

describe('DaysContentsComponent', () => {
  let component: DaysContentsComponent;
  let fixture: ComponentFixture<DaysContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
