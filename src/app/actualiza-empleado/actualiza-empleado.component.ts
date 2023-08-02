import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})
export class ActualizaEmpleadoComponent {
title='Actualiza Empleado';
empleadoNombre:string='';
empleadoApellido:string='';
empleadoCargo:string='';
empleadoSalario:number=0;
indice:number;
accion:number;

constructor(private router: Router, private route:ActivatedRoute, private servicioMensaje:ServicioEmpleadosService, private empleadoService:EmpleadosService){}

ngOnInit(): void {
  this.accion=parseInt(this.route.snapshot.queryParams['accion']);
  this.empleados = this.empleadoService.empleados;
  this.indice = this.route.snapshot.params['id'];
  let empleado:Empleado = this.empleadoService.findEmpleado(this.indice);
  this.empleadoNombre = empleado.nombre;
  this.empleadoApellido = empleado.apellido;
  this.empleadoSalario = empleado.salario;
  this.empleadoCargo = empleado.cargo;
  
}



empleados:Empleado[]=[];
backHome(){
this.router.navigate(['']);
}
/* updateEmpleado(){
  let miEmpleado = new Empleado (this.empleadoNombre,this.empleadoApellido,this.empleadoCargo,this.empleadoSalario);  
  this.empleadoService.updateEmpleadoServicio(this.indice, miEmpleado);
  this.router.navigate(['']);
}

eliminarEmpleado(){  
  this.empleadoService.eliminarEmpleado(this.indice);
  this.router.navigate(['']);
}
 */
updateEmpleado(){  
  if(this.accion==1){
    let miEmpleado = new Empleado (this.empleadoNombre,this.empleadoApellido,this.empleadoCargo,this.empleadoSalario);  
  this.empleadoService.updateEmpleadoServicio(this.indice, miEmpleado);
  console.log(miEmpleado);
  this.router.navigateByUrl('');
  //this.router.navigate(['']);
  }else{
    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigateByUrl('');
    //this.router.navigate(['']);
  }  
  
  
}
  


}
