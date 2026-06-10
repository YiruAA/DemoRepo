import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NE } from './n-e';

describe('NE', () => {
  let component: NE;
  let fixture: ComponentFixture<NE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
