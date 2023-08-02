export class Empleado{
  subscribe(arg0: () => void) {
    throw new Error('Method not implemented.');
  }


constructor(nombre:string,apellido:string,cargo:string,salario:number ){

            this.nombre=nombre;
            this.apellido=apellido;
            this.cargo=cargo;
            this.salario=salario;
}

    nombre:string='';
    apellido:string='';
    cargo:string='';
    salario:number=0;


}