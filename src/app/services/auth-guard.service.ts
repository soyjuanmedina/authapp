import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private _authService: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next, state);
    if (this._authService.isAuthenticated()) {
      console.log('Guar');
      return true;
    } else {
      console.error('No paso');
      return false;
    }
  }

}
