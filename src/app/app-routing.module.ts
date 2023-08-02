import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { ActualizaEmpleadoComponent } from './actualiza-empleado/actualiza-empleado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';


const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[LoginGuardian]},
  {path:'proyectos',component:ProyectosComponent,canActivate:[LoginGuardian]},  
  {path:'agregarEmpleado',component:AgregarEmpleadoComponent,canActivate:[LoginGuardian]},
  {path:'quienes',component:QuieneSomosComponent,canActivate:[LoginGuardian]},
  {path:'contacto',component:ContactoComponent,canActivate:[LoginGuardian]},
  {path:'actualizaEmpleado/:id',component:ActualizaEmpleadoComponent,canActivate:[LoginGuardian]},
  {path:'actualizaEmpleado',component:ActualizaEmpleadoComponent,canActivate:[LoginGuardian]},
  {path:'login',component:LoginComponent},
  {path: '**', redirectTo:'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
