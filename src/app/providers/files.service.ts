import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url = 'http://localhost/API/components/img/subir.php';

  constructor( private http: HttpClient) {
  }
  
  subirImagen(datos:any):Observable<any>{
    return this.http.post(this.url, datos);
  }

  cualImagen():Observable<any>{
    return this.http.get(this.url);
  }

}
