import { Component, Input} from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Lista de Empleados';
  empleadoNombre:string='';
  empleadoApellido:string='';
  empleadoCargo:string='';
  empleadoSalario:number=0;
  @Input() empleadoLista:Empleado;
  @Input() indice:number;

  empleados:Empleado[]=[];
  constructor(private servicioMensaje:ServicioEmpleadosService, private empleadoService:EmpleadosService, private router:Router ){
      
    /* ACA PODEMOS PASAR EL ARRAY DEL SERVICIO PARA MOSTRAR LA LIST */
    // this.empleados = this.empleadoService.empleados
  }
    /* PODEMOS RELLENAR EL ARRAY CON onInit otra forma de hacerlo distinta a la de arriba */
  ngOnInit(): void {
    // this.empleados = this.empleadoService.empleados; "Con esta linea cargabamos los empleados a la vista con el array ahora lo vamos a traer de firebase"
    this.empleadoService.cargarEmpleados().subscribe(empleadosCargados=>{
        //console.log(empleadosCargados);
        /* this.router.navigateByUrl('home');  */ 
        /* utilizamos Object.values ya que lo que devuelve es un observable y queremos rellenar un array
        por lo que con el metodo object.values tomamos los valores para rellenar el array */
        this.empleados = Object.values(empleadosCargados)
        this.empleadoService.setEmpleados(this.empleados)     
      

    });
  }


  /* Metodo Para agregar empleados  */
  registrarEmpleado(){
    let miEmpleado = new Empleado(this.empleadoNombre,this.empleadoApellido,this.empleadoCargo,this.empleadoSalario);
    /* this.servicioMensaje.muestraMensaje("Nombre empleado: "+ miEmpleado.nombre + "\n" +  "Apellido Empleado: "+ miEmpleado.apellido + "\n"+
     "Cargo: " + miEmpleado.cargo + "\n"+ "Salario: " + miEmpleado.salario);  */   
    //console.log(miEmpleado);
    // this.empleados.push(miEmpleado);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);

  }


 

  arrayCaracteristicas = [""];

agregarCaracteristica(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);


}
}