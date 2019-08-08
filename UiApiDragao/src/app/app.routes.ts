import { Routes } from '@angular/router';
import { ListaDragoesComponent } from './pages/lista-dragoes/lista-dragoes.component';
import { AdicionaDragaoComponent } from './pages/adiciona-dragao/adiciona-dragao.component';
import { DetalhesDragaoComponent } from './pages/detalhes-dragao/detalhes-dragao.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListaDragoesComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      {
        path: 'adicionar',
        component: AdicionaDragaoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'detalhes/:id',
        component: DetalhesDragaoComponent,
        canActivate: [AuthGuard]
      }
    ]
  },

  { path: '**', redirectTo: '' }
];
