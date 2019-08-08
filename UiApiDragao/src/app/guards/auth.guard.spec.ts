import { TestBed, async, inject, getTestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterModule, Router, CanActivate } from '@angular/router';
import { routes } from '../app.routes';
import { testingModule } from 'src/test';
import { LoginService } from '../services/login.service';

describe('AuthGuard', () => {
  let service: LoginService;
  let guard: AuthGuard;
  let router: Router;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule(testingModule);
  });

  beforeEach(() => {
    injector = getTestBed();
    guard = injector.get(AuthGuard);
    service = injector.get(LoginService);
    router = injector.get(Router);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('deve poder ir a pagina', () => {
    service.userLogado = {};
    expect(guard.canActivate({} as any, {} as any)).toBeTruthy();
  });

  it('deve redirecionar para o login', () => {
    spyOn(router, 'navigate');

    expect(guard.canActivate({} as any, {} as any)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
