import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRepositorios } from './listar-repositorios';

describe('ListarRepositorios', () => {
  let component: ListarRepositorios;
  let fixture: ComponentFixture<ListarRepositorios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarRepositorios],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarRepositorios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
