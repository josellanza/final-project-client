import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequireInitGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then((user) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

}
