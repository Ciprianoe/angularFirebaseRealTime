import { Component, EventEmitter, Output } from '@angular/core';
//import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristica-empleado',
  templateUrl: './caracteristica-empleado.component.html',
  styleUrls: ['./caracteristica-empleado.component.css']
})
export class CaracteristicaEmpleadoComponent {
/* con esto enviamos data de hijo a padre con el decorador output y debe estar import */
  @Output() caracteristicaEmpleados = new EventEmitter<string>();

  //constructor(private servicioMensaje:ServicioEmpleadosService ){ }

/* con esto es el metodo para agregar la caracteristica o la data que viaja de hijo a padre */
  agregaCaracteristicas(value: string) {
    //this.servicioMensaje.muestraMensaje("Caracteristica a agregar: "+ value ); 
    this.caracteristicaEmpleados.emit(value);
    console.log(value)
    
  }

}
