import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 img ='';
   constructor(private loginService:LoginService){ }
 

ngOnInit(): void {
  firebase.initializeApp({
    apiKey:"AIzaSyBDfEuZfOvwkEpQ3q_d-u8mQPGO4hY7wJ0",
    authDomain:"empleados-7ca4b.firebaseapp.com", 
    
  });

}

logIn(){
  
 return this.loginService.logInGetToken();
 }


logOut(){
  return this.loginService.logOut();
}

 
}
