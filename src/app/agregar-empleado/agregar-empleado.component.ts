import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
title ='Agregar Empleado';
empleadoNombre:string='';
empleadoApellido:string='';
empleadoCargo:string='';
empleadoSalario:number=0;
empleados:Empleado[]=[];
/* miEmpleado: Empleado; */


  constructor(private router:Router, private servicioEmpleado:ServicioEmpleadosService, private empleadoService:EmpleadosService){}



  ngOnInit():void{
  
    this.empleados = this.empleadoService.empleados;
  }
  
  backHome(){
    this.router.navigate(['']);
    }

    
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.empleadoNombre,this.empleadoApellido,this.empleadoCargo,this.empleadoSalario);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
    //this.router.navigate(['']);
    this.router.navigateByUrl('');
  }  







}


