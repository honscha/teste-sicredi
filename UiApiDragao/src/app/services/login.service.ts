import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

const user = { usuario: 'User', senha: 'Password' };

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogado = null;
  constructor(@Inject(Router) private router: Router) {}

  login(login) {
    if (login.usuario === user.usuario && login.senha === user.senha) {
      this.userLogado = user;
      this.router.navigate(['']);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userLogado = null;
    this.router.navigate(['login']);
  }
}
