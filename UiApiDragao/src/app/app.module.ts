import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DragonAPIService } from './services/dragaon-api.service';
import { AdicionaDragaoComponent } from './pages/adiciona-dragao/adiciona-dragao.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaDragoesComponent } from './pages/lista-dragoes/lista-dragoes.component';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesDragaoComponent } from './pages/detalhes-dragao/detalhes-dragao.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, AdicionaDragaoComponent, ListaDragoesComponent, DetalhesDragaoComponent, LoginComponent],
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
  providers: [DragonAPIService, HttpClient, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
