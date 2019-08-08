import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonAPIResponse } from 'src/app/types/DragonAPI.response';
import { DragonAPIService } from 'src/app/services/dragaon-api.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-dragoes',
  templateUrl: './lista-dragoes.component.html',
  styleUrls: ['./lista-dragoes.component.scss']
})
export class ListaDragoesComponent {
  dragoes: Observable<DragonAPIResponse[]>;
  dragaoDeletado: DragonAPIResponse;
  formEdit: FormControl;
  dragaoEdit: DragonAPIResponse;

  constructor(
    @Inject(DragonAPIService) public service: DragonAPIService,
    @Inject(FormBuilder) private fb: FormBuilder,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit() {
    // const randNumber = Math.random() * 10;
    // this.service.adicionaDragao({
    //   name: `Dragao${randNumber}`,
    //   type: `string`
    // })
    this.dragoes = this.service.listaDragoes().pipe();
  }

  ngAfterViewInit() {
    this.service.refreshDragoes();
  }

  navigateDetalhes(dragao: DragonAPIResponse) {
    this.router.navigate(['/detalhes', dragao.id]);
  }

  createForm(dragao: DragonAPIResponse) {
    if (!this.isDragaoDeletado(dragao)) {
      this.dragaoEdit = dragao;
      this.formEdit = this.fb.control([dragao.name]);
    }
  }

  editaDragao() {
    this.dragaoEdit.name = this.formEdit.value;
    this.service.editaDragao(this.dragaoEdit).then(() => {
      this.dragaoEdit = null;
    });
  }

  deletaDragao(id: string) {
    if (this.dragaoDeletado) {
      this.service.refreshDragoes();
    }
    this.service.deletaDragao(id).then((dragaoDeletado: DragonAPIResponse) => {
      this.dragaoDeletado = dragaoDeletado;
    });
  }

  desfazDelecao() {
    this.service.adicionaDragao(this.dragaoDeletado).then(() => {
      this.service.refreshDragoes();
      this.dragaoDeletado = null;
    });
  }

  isDragaoDeletado(dragao) {
    return this.dragaoDeletado ? dragao.id == this.dragaoDeletado.id : false;
  }
}
