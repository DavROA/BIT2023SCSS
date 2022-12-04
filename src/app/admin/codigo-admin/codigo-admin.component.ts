import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-admin',
  templateUrl: './codigo-admin.component.html',
  styleUrls: ['./codigo-admin.component.scss']
})
export class CodigoAdminComponent {

  correo: any;
  codigo: any;
  ruta: any;

  miFormulario: FormGroup = this.fb.group({
    codigo: ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      codigo: '',
    });

    this.ruta = this.CS.get('ruta');
    console.log(this.ruta);

    this.correo = this.CS.get('correo');

    this.AS.comprobar(this.correo).subscribe((data: any) => {
      console.log(data);
      this.codigo = data.codigo;
    });


  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    if(this.miFormulario.value.codigo == this.codigo){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Código correcto',
        showConfirmButton: false,
        timer: 1500
      })
      if(this.ruta != ''){
        this.router.navigate(['/password']);
      }else{
        this.AS.actualizarActivo(this.correo).subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['/listar-admin']);
        });
    }
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Código incorrecto',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
