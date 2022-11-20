import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  correo: any;

  miFormulario: FormGroup = this.fb.group({
    correo: [''],
    passNew: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]},{
      validators: this.matchPass
  });


  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit(): void {
    this.correo = this.CS.get('correo');

    this.miFormulario.setValue({
      correo: '',
      passNew: '',
      confirmPassword: ''
    });

    /*if(this.CS.get('access_token')){
      this.router.navigate(['/welcome']);
    }*/
  }

  matchPass(ctrl: FormControl) {
    const pass = ctrl.get('passNew')?.value;
    const confirmPass = ctrl.get('confirmPassword')?.value;
    if (pass != confirmPass) {
      ctrl.get('confirmPassword')?.setErrors({ cpass: true });
    }
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  passReq() {
    return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
      this.miFormulario.controls['confirmPassword']?.touched &&
      this.miFormulario.controls['pass']?.touched;
  }

  save() {
    console.log(this.miFormulario.value);
    this.AS.restaurar(this.miFormulario.value, this.correo).subscribe((data: any) => {
      console.log(data);
      if (data.resultado == 'Actualizado') {
        this.router.navigate(['/login']);
      }
    });
  }
}
