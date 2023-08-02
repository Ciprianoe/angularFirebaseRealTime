import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicaEmpleadoComponent } from './caracteristica-empleado/caracteristica-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ActualizaEmpleadoComponent } from './actualiza-empleado/actualiza-empleado.component';
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicaEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuieneSomosComponent,
    ContactoComponent,
    ActualizaEmpleadoComponent,
    LoginComponent,
    AgregarEmpleadoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,DataService,LoginService,CookieService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
