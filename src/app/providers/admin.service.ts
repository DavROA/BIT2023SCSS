import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  URL = "http://127.0.0.1/API";

  constructor(private http: HttpClient) { }

  getAdministradores(){
    return this.http.get(`${this.URL}/components/admin/getAdministradores.php`);
  }


  eliminarAdminJR(id_usuario:number){
    return this.http.delete(`${this.URL}/components/admin/eliminarAdminJR.php?id_usuario=${id_usuario}`);
  }

  
  
}
