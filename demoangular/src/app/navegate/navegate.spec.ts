import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navegate } from './navegate';

describe('Navegate', () => {
  let component: Navegate;
  let fixture: ComponentFixture<Navegate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navegate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navegate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
