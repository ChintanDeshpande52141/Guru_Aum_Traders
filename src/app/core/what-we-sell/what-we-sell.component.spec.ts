import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeSellComponent } from './what-we-sell.component';

describe('WhatWeSellComponent', () => {
  let component: WhatWeSellComponent;
  let fixture: ComponentFixture<WhatWeSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
