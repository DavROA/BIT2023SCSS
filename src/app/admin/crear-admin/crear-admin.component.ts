import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.scss']
})
export class CrearAdminComponent {
  emailCheck = '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  passReq() {
    return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
      this.miFormulario.controls['confirmPassword']?.touched &&
      this.miFormulario.controls['pass']?.touched;
  }

  correoReq() {
    return this.miFormulario.controls['confirmCorreo']?.errors?.['required'] &&
      this.miFormulario.controls['confirmCorreo']?.touched &&
      this.miFormulario.controls['correo']?.touched;
  }

  emailReq() {
    return this.miFormulario.controls['correo']?.errors?.['required'] &&
      this.miFormulario.controls['correo']?.touched;
  }

  emailPattern() {
    return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
      this.miFormulario.controls['correo']?.touched;
  }

  matchPass(ctrl: FormControl) {
    const pass = ctrl.get('pass')?.value;
    const confirmPass = ctrl.get('confirmPassword')?.value;
    if (pass != confirmPass) {
      ctrl.get('confirmPassword')?.setErrors({ cpass: true });
    }
  }

  matchCorreo(ctrl: FormControl) {
    const correo = ctrl.get('correo')?.value;
    const confirmCorreo = ctrl.get('confirmCorreo')?.value;
    if (correo != confirmCorreo) {
      ctrl.get('confirmCorreo')?.setErrors({ ccorreo: true });
    }
  }

  miFormulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required]],
    pass: ['', [Validators.required, Validators.minLength(8)]],
    perfil: ['', [Validators.required]],
    estatus: ['', [Validators.required]],
    confirmCorreo: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    nombre: ['',[Validators.required]],
    apellido_paterno: ['',[Validators.required]],
    apellido_materno: ['',[Validators.required]],
    carrera: ['',[Validators.required]],
    celular: ['',[Validators.required]],
  }, {
    validators: [this.matchPass, this.matchCorreo]
  });

  constructor(private fb: FormBuilder, 
              private CS: CookieService, 
              private router: Router, 
              private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      correo: '',
      confirmCorreo: '',
      pass: '',
      confirmPassword: '',
      perfil: '3',
      estatus: '1',
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      carrera: '',
      celular: '',
    });

    // if(this.CS.get('access_token')){
    //   this.router.navigate(['/welcome']);
    // } 
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;

  }

  save() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registrado',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(this.miFormulario.value);
    this.CS.set('correo',this.miFormulario.value.correo);
    this.AS.registroAdmin(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.message == 'Registrado') {
        this.AS.codigo(this.miFormulario.value.correo).subscribe((datas: any) => {
          console.log(datas);
          this.AS.registrarCodigo(datas.codigo, this.miFormulario.value.correo).subscribe((datast: any) => {
            this.router.navigate(['/codigo-admin']);
          });
        });
      }
    });
  }

}
