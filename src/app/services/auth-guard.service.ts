import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private _authService: AuthService, private _router: Router) { }

//Mise en place d'un Guard pour securiser des urls
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
  	if(this._authService.isAuth){
  		return true;;
  	}
  	else{
  		this._router.navigate(['auth']);
  	}
  }

}
