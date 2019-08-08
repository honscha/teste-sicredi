import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { testingModule } from 'src/test';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    service = getTestBed().get(LoginService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve realizar o login', () => {
    spyOn(service, 'login').and.returnValue(true);
    component.login({ usuario: 'User', senha: 'Password' });

    expect(component.erroLogin).toBeFalsy();
  });

  it('nao deve realizar o login', () => {
    spyOn(service, 'login').and.returnValue(false);
    component.login({ usuario: 'User', senha: '123' });
    expect(component.erroLogin).toBeTruthy();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#erro'))).toBeTruthy();
  });
});
