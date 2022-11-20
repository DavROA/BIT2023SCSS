import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletarComponent } from './client/completar/completar.component';
import { EleccionComponent } from './client/eleccion/eleccion.component';
import { HomeComponent } from './client/home/home.component';
import { MetodoComponent } from './client/metodo/metodo.component';
import { PerfilComponent } from './client/perfil/perfil.component';
import { PlanesComponent } from './client/planes/planes.component';
import { ProgramaComponent } from './client/programa/programa.component';
import { QrComponent } from './client/qr/qr.component';
import { TalleresComponent } from './client/talleres/talleres.component';
import { CodigoComponent } from './pages/codigo/codigo.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RestaurarComponent } from './pages/restaurar/restaurar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  {
    path: 'eleccion',
    component: EleccionComponent
  },
  {
    path: 'metodo',
    component: MetodoComponent
  },
  {
    path: 'completar',
    component: CompletarComponent
  },
  {
    path: 'qr',
    component: QrComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'programa',
    component: ProgramaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'talleres',
    component: TalleresComponent
  },
  {
    path: 'planes',
    component: PlanesComponent
  },
  {
    path: 'codigo',
    component: CodigoComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'restaurar',
    component: RestaurarComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
