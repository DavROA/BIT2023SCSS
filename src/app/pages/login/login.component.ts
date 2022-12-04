import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailCheck = '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq() {
    return this.miFormulario.controls['correo']?.errors?.['required'] &&
      this.miFormulario.controls['correo']?.touched;
  }

  emailPattern() {
    return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
      this.miFormulario.controls['correo']?.touched;
  }

  miFormulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required]],
    pass: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      correo: '',
      pass: '',
    });

    this.Formulario.setValue({
      email: '',
    });
    /*if(this.CS.get('access_token')){
      this.router.navigate(['/welcome']);
    }*/
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  save() {
    console.log(this.miFormulario.value);
    this.AS.login(this.miFormulario.value).subscribe((data: any) => {
      if (data.activo == 'null') {
        this.CS.set('correo', this.miFormulario.value.correo);
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Comfirme su correo electrónico',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/codigo']);
      } else if (data.resultado == 'Conectado') {
        console.log(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        this.CS.deleteAll();
        this.CS.set('access_token', data.token, 7, '/');
        this.CS.set('id_usuario', data.id_usuario, 1, '/');
        this.CS.set('nombre', data.nombre, 1, '/');
        this.CS.set('apellido_paterno', data.apellido_paterno, 1, '/');
        this.CS.set('apellido_materno', data.apellido_materno, 1, '/');
        this.CS.set('correo', data.correo, 1, '/');
        this.CS.set('carrera', data.carrera, 1, '/');
        this.CS.set('celular', data.celular, 1, '/');
        this.CS.set('estatus', data.estatus, 1, '/');
        this.CS.set('perfil', data.perfil, 1, '/');
        this.CS.set('matricula', data.matricula, 1, '/');
        this.CS.set('institucion', data.institucion, 1, '/');
        this.CS.set('correo', data.correo, 1, '/');
        this.CS.set('activo', data.activo, 1, '/');
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Usuario o Contraseña incorrecta',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
  /*MODAL*/
  
  correoReq(){
    return this.Formulario.controls['email']?.errors?.['required'] &&
           this.Formulario.controls['email']?.touched;
  }
  
  correoPattern(){
    return this.Formulario.controls['email']?.errors?.['pattern'] &&
           this.Formulario.controls['email']?.touched;
  }
  
    Formulario: FormGroup = this.fb.group({
      email: ['',[Validators.required]]
    });

    CampoValido(campo: string){
      return this.Formulario.controls[campo].errors 
            && this.Formulario.controls[campo].touched;
  
    }

    saveFormulario(){
      this.AS.codigo(this.Formulario.value).subscribe((data: any) => {
        if(data.codigo){
            console.log(data.codigo);
            this.CS.set('email', this.Formulario.value.email, 1, '/');
            this.AS.codigo(this.Formulario.value.email).subscribe((datas: any) => {
              console.log(datas);
              this.AS.registrarCodigo(datas.codigo, this.Formulario.value.email).subscribe((datast: any) => {
                this.CS.set('ruta','restaurar',1);
                this.router.navigate(['/codigo']);
              });
            });
          }else{
            alert('¡Oh no! Ha ocurrido un error intente más tarde');
          }
        });
    }
}
