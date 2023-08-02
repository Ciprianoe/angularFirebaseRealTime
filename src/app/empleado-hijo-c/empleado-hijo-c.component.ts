import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

/*   empleados:Empleado[]=[
    new Empleado ("Cipriano","Escorche","Presidente",8500),
    new Empleado ("Angela","Sanchez","Vice Presidente",7500),
    new Empleado ("Cedric","Escorche","Director",6500),
    new Empleado ("Lara","Klitz","Administradora",5500),

];

empleadoAgregado(empleado:Empleado){
  this.empleados.push(empleado);
}
 */

@Input() empleadoLista:Empleado;
@Input() indice:number;

arrayCaracteristicas = [""];

agregarCaracteristica(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);
  console.log(this.arrayCaracteristicas)
}


}
