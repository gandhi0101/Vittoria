import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderhComponent } from './sliderh.component';

describe('SliderhComponent', () => {
  let component: SliderhComponent;
  let fixture: ComponentFixture<SliderhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
