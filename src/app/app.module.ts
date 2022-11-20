import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarClientComponent } from './shared/navbar-client/navbar-client.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompletarComponent,
    EleccionComponent,
    HomeComponent,
    MetodoComponent,
    PerfilComponent,
    PlanesComponent,
    ProgramaComponent,
    QrComponent,
    TalleresComponent,
    CodigoComponent,
    LoginComponent,
    PasswordComponent,
    RegistroComponent,
    RestaurarComponent,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,
    NavbarClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
