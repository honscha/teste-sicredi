import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  erroLogin = false;

  constructor(
    @Inject(LoginService) private loginService: LoginService,
    @Inject(FormBuilder) private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(campos) {
    if (!this.loginService.login(campos)) {
      this.erroLogin = true;
    }
  }
}
