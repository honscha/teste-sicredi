import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ListaDragoesComponent } from './pages/lista-dragoes/lista-dragoes.component';
import { AdicionaDragaoComponent } from './pages/adiciona-dragao/adiciona-dragao.component';
import { DetalhesDragaoComponent } from './pages/detalhes-dragao/detalhes-dragao.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { testingModule } from '../test';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
