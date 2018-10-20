import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatActivityPageComponent } from './what-activity-page.component';

describe('WhatActivityPageComponent', () => {
  let component: WhatActivityPageComponent;
  let fixture: ComponentFixture<WhatActivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatActivityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
