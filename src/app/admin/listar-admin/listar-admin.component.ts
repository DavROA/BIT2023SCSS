import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/providers/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-admin',
  templateUrl: './listar-admin.component.html',
  styleUrls: ['./listar-admin.component.scss']
})

export class ListarAdminComponent implements OnInit{
  administradores: any;

  constructor(private AdminS: AdminService){}
  
  ngOnInit(): void {
    this.getAdministradores();
  }

  getAdministradores(){
    this.AdminS.getAdministradores().subscribe((data: any) => {
      console.log(data);
      this.administradores = data;
    });
  }

  eliminarAdminJR(id_usuario:number){
    Swal.fire({
      title: '¿Estás seguro de eliminar este producto?',
      text: "¡No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado correctamente',
          'success'
        );
        this.AdminS.eliminarAdminJR(id_usuario).
        subscribe(
          (admin:any)=>{
            console.log("Usuario Eliminado");
            console.log(admin);
            this.ngOnInit();
          }
        )
      }
    });
  }
  
}
