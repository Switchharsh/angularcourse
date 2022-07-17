import { ActivatedRouteSnapshot,
     CanActivate, 
     RouterStateSnapshot } from "@angular/router";
import { Observable } from  'rxjs';
// "rxjs/Observable";
// import { Observable } from 'node_modules/rxjs/Observable.js'

export class AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        
    }
}