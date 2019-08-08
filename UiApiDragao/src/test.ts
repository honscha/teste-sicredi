// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AppComponent } from './app/app.component';
import { AdicionaDragaoComponent } from './app/pages/adiciona-dragao/adiciona-dragao.component';
import { ListaDragoesComponent } from './app/pages/lista-dragoes/lista-dragoes.component';
import { DetalhesDragaoComponent } from './app/pages/detalhes-dragao/detalhes-dragao.component';
import { LoginComponent } from './app/pages/login/login.component';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

export const testingModule = {
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [
    AppComponent,
    AdicionaDragaoComponent,
    ListaDragoesComponent,
    DetalhesDragaoComponent,
    LoginComponent
  ]
};
