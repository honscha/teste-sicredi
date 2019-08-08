import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { ListaDragoesComponent } from './lista-dragoes.component';
import { DragonAPIService } from 'src/app/services/dragaon-api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApplicationModule } from '@angular/core';
import { testingModule } from 'src/test';

describe('ListaDragoesComponent', () => {
  let component: ListaDragoesComponent;
  let fixture: ComponentFixture<ListaDragoesComponent>;
  let injector: TestBed;
  let service: DragonAPIService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDragoesComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(DragonAPIService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Deleção', () => {
    it('deve deletar dragao', done => {
      const dragao = {};

      spyOn(service, 'deletaDragao').and.returnValue(Promise.resolve(dragao));
      component.deletaDragao('1');
      expect(service.deletaDragao).toHaveBeenCalledWith('1');
      fixture.whenStable().then(() => {
        expect(component.dragaoDeletado).toBe(dragao);
        done();
      });
    });

    it('deve recriar dragao deletado', done => {
      const dragao = {};

      spyOn(service, 'deletaDragao').and.returnValue(Promise.resolve(dragao));
      component.deletaDragao('1');
      expect(service.deletaDragao).toHaveBeenCalledWith('1');

      fixture.whenStable().then(() => {
        expect(component.dragaoDeletado).toBe(dragao);
        spyOn(service, 'adicionaDragao').and.returnValue(Promise.resolve({}));
        spyOn(service, 'refreshDragoes');
        component.desfazDelecao();

        expect(service.adicionaDragao).toHaveBeenCalled();

        fixture.whenStable().then(() => {
          expect(service.refreshDragoes).toHaveBeenCalled();
          expect(component.dragaoDeletado).toBeNull();
          done();
        });
      });
    });
  });
});
