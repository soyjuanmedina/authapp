import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
        } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private _authService: AuthService,
    public router: Router ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next, state);
    if (this._authService.isAuthenticated()) {
      console.log('Protegida por el Auth-Guard');
      return true;
    } else {
      console.error('Acceso rechazado por el Auth-Guard');
      this.router.navigate(['/']);
      return false;
    }
  }

}
