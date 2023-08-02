import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaEmpleadoComponent } from './caracteristica-empleado.component';

describe('CaracteristicaEmpleadoComponent', () => {
  let component: CaracteristicaEmpleadoComponent;
  let fixture: ComponentFixture<CaracteristicaEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicaEmpleadoComponent]
    });
    fixture = TestBed.createComponent(CaracteristicaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
