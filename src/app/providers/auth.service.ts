import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // URL = "http://127.0.0.1/php_bit";
  URL = "http://127.0.0.1/rene";

  login(login: any): Observable<Request> {
    return this.http.get<Request>(
      `${this.URL}/auth/login.php?correo=${login.correo}&pass=${login.pass}`
    );
  }

  registro(registro: any): Observable<Request>{
    return this.http.post<Request>(
      `${this.URL}/auth/registro.php`, registro
    );
  }

  codigo(to: any){
    return this.http.get(`https://mudate.000webhostapp.com/correonew.php?to=${to}&from=braquetesss@gmail.com`);
  }

  registrarCodigo(codigo: any, correo: any){
    return this.http.get(`${this.URL}/auth/codigo.php?codigo=${codigo}&correo=${correo}`);
  }

  comprobar(correo: any){
    return this.http.get(`${this.URL}/auth/comprobar.php?correo=${correo}`);
  }

  restaurar(form: any, correo: any){
    return this.http.get(`${this.URL}/auth/restaurar.php?pass=${form.passNew}&correo=${correo}`);
  }

  actualizarActivo(correo: any){
    return this.http.get(`${this.URL}/auth/actualizarActivo.php?correo=${correo}`);
  }

  actualizarUsuario(registro: any): Observable<Request>{
    return this.http.post<Request>(
      `${this.URL}/auth/actualizarRegistro.php`, registro
    );
  }

}
