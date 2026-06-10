import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle3 } from './detalle3';

describe('Detalle3', () => {
  let component: Detalle3;
  let fixture: ComponentFixture<Detalle3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalle3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
