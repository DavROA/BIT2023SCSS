import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit {

  usuario = {
    correo: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    id_usuario: '',
  }

  user:any;

  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    this.usuario.correo = this.CS.get('correo');
    this.usuario.nombre = this.CS.get('nombre');
    this.usuario.apellido_paterno = this.CS.get('apellido_paterno');
    this.usuario.apellido_materno = this.CS.get('apellido_materno');
    this.usuario.id_usuario = this.CS.get('id_usuario');

    if(this.usuario.nombre != 'null'){
      this.user = 'xd';
    }else{
      this.user = this.usuario.correo;
      this.user = this.usuario.nombre;
      this.user = this.usuario.id_usuario;
    }
  }

}
