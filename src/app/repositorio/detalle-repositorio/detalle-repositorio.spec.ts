import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepositorio } from './detalle-repositorio';

describe('DetalleRepositorio', () => {
  let component: DetalleRepositorio;
  let fixture: ComponentFixture<DetalleRepositorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleRepositorio],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleRepositorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
