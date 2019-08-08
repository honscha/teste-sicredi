import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DragonAPIService } from 'src/app/services/dragaon-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adiciona-dragao',
  templateUrl: './adiciona-dragao.component.html',
  styleUrls: ['./adiciona-dragao.component.scss']
})
export class AdicionaDragaoComponent implements OnInit {
  formAdd: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    @Inject(DragonAPIService) private service: DragonAPIService,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit() {
    this.formAdd = this.fb.group({
      name: [''],
      type: [''],
      histories: []
    });
  }

  navigateLista() {
    this.router.navigate(['']);
  }

  adicionaDragao(dragao) {
    this.service.adicionaDragao(dragao);
    this.navigateLista();
  }

  adicionaAleatorio() {
    this.service.adicionaDragao(null);
    this.navigateLista();
  }
}
