import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { testingModule } from 'src/test';
import { Router } from '@angular/router';

describe('LoginService', () => {
  let service: LoginService;
  let router: Router;
  let injector: TestBed;

  beforeEach(() => TestBed.configureTestingModule(testingModule));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(LoginService);
    router = injector.get(Router);
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  describe('Login', () => {
    it('nao deve realizar o login', () => {
      expect(service.login({})).toBeFalsy();
    });

    it('deve realizar login', () => {
      spyOn(router, 'navigate');
      service.login({ usuario: 'User', senha: 'Password' });

      expect(router.navigate).toHaveBeenCalledWith(['']);
      expect(service.userLogado).toEqual({
        usuario: 'User',
        senha: 'Password'
      });
    });
  });

  describe('Logout', () => {
    it('deve realizar o logout', () => {
      spyOn(router, 'navigate');

      service.login({ usuario: 'User', senha: 'Password' });

      expect(service.userLogado).toEqual({
        usuario: 'User',
        senha: 'Password'
      });


      service.logout();
      expect(service.userLogado).toBe(null);
      expect(router.navigate).toHaveBeenCalledWith(['login']);
    });
  });
});
