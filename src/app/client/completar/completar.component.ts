import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-completar',
  templateUrl: './completar.component.html',
  styleUrls: ['./completar.component.scss']
})
export class CompletarComponent implements OnInit {

    miFormulario: FormGroup = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido_paterno: ['',[Validators.required]],
      apellido_materno: ['',[Validators.required]],
      carrera: ['',[Validators.required]],
      matricula: ['',[Validators.required]],
      institucion: ['',[Validators.required]],
      celular: ['',[Validators.required]],
      id_usuario: ''
    });
  
    constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }
  
    ngOnInit(): void {
  
      this.miFormulario.setValue({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        carrera: '',
        matricula: '',
        institucion: '',
        celular: '',
        id_usuario: this.CS.get('id_usuario')
      });

    }
  
    campoValido(campo: string){
      return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  
    }
  
    save(){
      console.log(this.miFormulario.value);
      this.AS.actualizarUsuario(this.miFormulario.value).subscribe((data: any) => {
        console.log(data);
        if(data.mensaje == 'Registro correcto'){
          this.router.navigate(['/metodo']);
        }
      });
    }
  }
