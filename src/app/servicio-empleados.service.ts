import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

/* para que este service funcione crearemos un metodo con lo que queremos */
/* luego hay que registrar este service */
muestraMensaje(mensaje:string){
  window.confirm(mensaje);
  //alert(mensaje);
}

}
