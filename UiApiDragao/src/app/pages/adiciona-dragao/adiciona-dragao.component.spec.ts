import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { AdicionaDragaoComponent } from './adiciona-dragao.component';
import { testingModule } from 'src/test';
import { DragonAPIService } from '../../services/dragaon-api.service';

describe('AdicionaDragaoComponent', () => {
  let component: AdicionaDragaoComponent;
  let fixture: ComponentFixture<AdicionaDragaoComponent>;
  let injector: TestBed;
  let service: DragonAPIService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaDragaoComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(DragonAPIService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.formAdd).toBeTruthy();
  });

  describe('Adiciona dragão', () => {
    beforeEach(() => {
      spyOn(service, 'adicionaDragao');
    });

    it('deve criar dragao aleatorio', () => {
      component.adicionaAleatorio();

      expect(service.adicionaDragao).toHaveBeenCalledWith(null);
    });

    it('deve criar dragao', () => {
      component.adicionaDragao({});

      expect(service.adicionaDragao).toHaveBeenCalledWith({});
    });
  });
});
