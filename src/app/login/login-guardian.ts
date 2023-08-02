import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import {ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree} from "@angular/router"
import { Observable } from "rxjs";

@Injectable()


export class LoginGuardian implements CanActivate {

    constructor(private loginService :LoginService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.logInGetToken()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }

}