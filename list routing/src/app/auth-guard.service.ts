import { ActivatedRouteSnapshot,
     CanActivate, 
     RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "./auth.service";
//import { Observable } from  'rxjs';
// "rxjs/Observable";
// import { Observable } from 'node_modules/rxjs/Observable.js'

export class AuthGuard implements CanActivate{
    constructor(private router: Router
        ,private authService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
     this.authService.isAuthenticated()
     .then(
         (authenticated: boolean) => {
             if (authenticated) {
                 return true;
             } else {
                 this.router.navigate(['/']);
             }
             }
         
     );   
    }
}