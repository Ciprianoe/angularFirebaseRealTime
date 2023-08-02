import { HttpClient} from '@angular/common/http';
//import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private paginaRecargada = false;
 
 
  constructor(private httpClient:HttpClient,private loginService:LoginService) {
   }


  obtenerEmpleados(){
    const token = this.loginService.token 
    // console.log('en obtener empleados')
    return this.httpClient.get('https://empleados-7ca4b-default-rtdb.firebaseio.com/datos.json?auth='+token);
    /* .pipe(
      tap(() => {
        if(!this.paginaRecargada){
          this.paginaRecargada = true;
          location.reload();
        }        
      })
    );  */
      
  }






  /* creamos metodo para guardar nuestros empleados en DB FIREBASE*/
guardarEmpleados(empleados:Empleado[]){
  // this.httpClient.post('https://mis-empleados-7de5e-default-rtdb.firebaseio.com/datos.json',empleados).subscribe
    this.httpClient.put('https://empleados-7ca4b-default-rtdb.firebaseio.com/datos.json?auth='+this.loginService.token,empleados).subscribe(

      {complete: console.info,
      error: console.error,
      next: console.log}
        
      // response=>console.log('Datos Guardados: '+ response),
      // error=>console.log('Error: '+ error)

    );
}

actualizarEmpleado(indice:number, empleado:Empleado){
  let url = 'https://empleados-7ca4b-default-rtdb.firebaseio.com/datos/'+ indice +'.json?auth='+this.loginService.token;
 return  this.httpClient.put(url,empleado).subscribe(
      {complete: console.info,
      error: console.error,
      next: console.log,}        
    )
    
    
}

eliminarEmpleado(indice:number){
  let url = 'https://empleados-7ca4b-default-rtdb.firebaseio.com/datos/'+ indice +'.json';

  this.httpClient.delete(url).subscribe(
      {complete: console.info,
      error: console.error,
      next: console.log}

    );


}

}
