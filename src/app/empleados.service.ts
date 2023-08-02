import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';
import { Observable } from 'rxjs';






// es eb este archivo o en los servicios donde van las consultas 
//  a la DB  RECORDSET ETC ETC 
// esto es un ejemplo de un DATASERVICE
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  
  constructor(private servicioMensaje:ServicioEmpleadosService, private dataService:DataService  ) {
;
   }
  
/*   empleados:Empleado[]=[
    new Empleado ("Cipriano","Escorche","Presidente",8500),
    new Empleado ("Angela","Sanchez","Vice Presidente",7500),
    new Empleado ("Cedric","Escorche","Director",6500),
    new Empleado ("Lara","Klitz","Administradora",5500),

];
 */


/* este metodo es para poder pasarle todos los cargados sin eliminar cada vez que se registra y poder rellenar el array con
 los datos anteriores*/

 setEmpleados(empleadosCargados: Empleado[]): void{

  this.empleados=empleadosCargados;
 }


/* para cargar los empleados a la vista desde el servicio data en cargar empleados devuelve el observavle que con subscribe
se maneja la data */
empleados:Empleado[]=[];

cargarEmpleados(){
  return this.dataService.obtenerEmpleados();
  

}


agregarEmpleadoServicio(empleado:Empleado){
  this.servicioMensaje.muestraMensaje("Nombre empleado: "+ empleado.nombre + "\n" +  "Apellido Empleado: "+ empleado.apellido + "\n"+
  "Cargo: " + empleado.cargo + "\n"+ "Salario: " + empleado.salario)
  this.empleados.push(empleado);

  this.dataService.guardarEmpleados(this.empleados);
}

findEmpleado(indice:number){
let empleado:Empleado = this.empleados[indice];
return empleado
}

updateEmpleadoServicio(indice:number,empleado:Empleado ){

  

  let empleadoUpdated = this.empleados[indice];
  empleadoUpdated.nombre = empleado.nombre;
  empleadoUpdated.apellido = empleado.apellido;
  empleadoUpdated.cargo = empleado.cargo;
  empleadoUpdated.salario = empleado.salario;
  return this.dataService.actualizarEmpleado(indice,empleado)
  
}

eliminarEmpleado(indice:number){
this.empleados.splice(indice,1);

this.dataService.eliminarEmpleado(indice);

/* debemos reconstruir el array para no saltar los indice */
if(this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
}



}
