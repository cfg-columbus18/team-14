import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowFeelingPageComponent } from './how-feeling-page.component';

describe('HowFeelingPageComponent', () => {
  let component: HowFeelingPageComponent;
  let fixture: ComponentFixture<HowFeelingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowFeelingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowFeelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
