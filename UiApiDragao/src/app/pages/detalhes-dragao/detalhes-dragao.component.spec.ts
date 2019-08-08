import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { DetalhesDragaoComponent } from './detalhes-dragao.component';
import { testingModule } from 'src/test';
import { DragonAPIService } from 'src/app/services/dragaon-api.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetalhesDragaoComponent', () => {
  let component: DetalhesDragaoComponent;
  let fixture: ComponentFixture<DetalhesDragaoComponent>;
  let injector: TestBed;
  let service: DragonAPIService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDragaoComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(DragonAPIService);
    activatedRoute = injector.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve pesquisar pelo dragao com id no parametro da url', done => {
    const param = { id: 1 };
    activatedRoute.params = of(param);
    spyOn(service, 'detalhesDragao').and.returnValue(Promise.resolve({}));
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(service.detalhesDragao).toHaveBeenCalledWith(param.id);
      expect(component.dragao).toEqual({});
      done();
    });
  });
});
