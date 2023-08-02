import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
title ='Proyectos';
empleadoNombre:string='';
empleadoApellido:string='';
empleadoCargo:string='';
empleadoSalario:number=0;

constructor(private router: Router, private servicioMensaje:ServicioEmpleadosService, private empleadoService:EmpleadosService) { }


ngOnInit(): void {
  this.empleados = this.empleadoService.empleados;
}



empleados:Empleado[]=[];
backHome(){
this.router.navigate(['']);
}




registrarEmpleadoProyecto(){
  let miEmpleado = new Empleado (this.empleadoNombre,this.empleadoApellido,this.empleadoCargo,this.empleadoSalario);  
  this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  this.router.navigate(['']);

}


}
