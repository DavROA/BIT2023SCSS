import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import { FilesService } from 'src/app/providers/files.service';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.scss']
})
export class MetodoComponent implements OnInit {

  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg = {
    url: ''
  };
  final:Boolean = true;
  msn:string | undefined;
  url = 'http://localhost/rene/components/img/subidas/';
  id: any;

  constructor(private subir: FilesService, private AS: AuthService, private CS: CookieService, private router: Router) { }

  file(){
    console.log('file');
    this.router.navigate(['/eleccion']);
  }

  ngOnInit() {
    this.msn = "Subir un PDF no mayor de 10MB";
    this.id = this.CS.get('id_usuario');
    console.log(this.id);
  }
  
  subiendoando(ev: any){
    let img:any = ev.target;
    if(img.files.length > 0){
      console.log(img.files);
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.subir.subirImagen(form).subscribe(
        resp => {
          console.log(resp);
          
          this.loader = false;
          if(resp.status){
            this.trueimg = true;
            this.myimg.url = this.url+resp.generatedName;
            this.CS.delete('pdf');
            this.CS.set('pdf', this.myimg.url);
            this.msn = "Correcto";
            console.log(this.myimg);
            this.AS.actualizarPDF(this.myimg.url,this.id).subscribe((data: any) => {
              console.log(data);
              this.router.navigate(['/eleccion']);
            });
            // this.desaparece();
          }
        },
        error => {
          this.loader = false;
          alert('Supera el tamaño permitido');
          
        }
      );

    }

  }
  desaparece(){
    let sto = setTimeout(()=>{
      this.trueimg = false;
      clearTimeout(sto);
    },20000)
  }

}