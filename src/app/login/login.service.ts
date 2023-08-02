import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  constructor(private router:Router, private cookies:CookieService,) {}

  token: string;
  /* 
  login(email:string,password:string){
    
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.cookies.set("token",token);
            this.router.navigate(['/']);        
                     
          }
        )
      }
    );
   

  } */

  login(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(response=>{ 
       // Establecer el usuario al iniciar sesión
       this.user = response.user;  
        firebase.auth().currentUser?.getIdToken().then(token=>{
          this.token = token;
          localStorage.setItem('user', JSON.stringify(this.user));  
          this.cookies.set("token",token);
          this.router.navigate(['/']); 
          //console.log(token);     
       })
    });
 }




getIdToken(){
  //return this.token;
  return this.cookies.get("token");
}

logInGetToken(){
  //console.log(this.token)
  //return this.token;
  return this.cookies.get("token");
}

  logOut(){
    firebase.auth().signOut().then(()=>{
      localStorage.removeItem('user'); 
      this.cookies.set("token",'')
      this.router.navigate(['/login']);
      window.location.reload();
    })
  }

}
