import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonAPIService } from '../../services/dragaon-api.service';
import { DragonAPIResponse } from '../../types/DragonAPI.response';

@Component({
  selector: 'app-detalhes-dragao',
  templateUrl: './detalhes-dragao.component.html',
  styleUrls: ['./detalhes-dragao.component.scss']
})
export class DetalhesDragaoComponent implements OnInit {
  dragao: DragonAPIResponse;

  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(DragonAPIService) private service: DragonAPIService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.service.detalhesDragao(params.id).then((response :DragonAPIResponse) => {
          this.dragao = response;
        });
      }
    });
  }
}
