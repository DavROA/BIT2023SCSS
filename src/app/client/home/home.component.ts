import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario = {
    correo: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
  }

  user: any;

  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    this.usuario.correo = this.CS.get('correo');
    this.usuario.nombre = this.CS.get('nombre');
    this.usuario.apellido_paterno = this.CS.get('apellido_paterno');
    this.usuario.apellido_materno = this.CS.get('apellido_materno');
    if(this.usuario.nombre != 'null'){
      this.user = 'xd';
    }else{
      this.user = this.usuario.correo;
    }
  }

}
