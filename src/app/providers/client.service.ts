import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL = "http://127.0.0.1/API";

  constructor(private http: HttpClient) { }

  getTallers(){
    return this.http.get(`${this.URL}/components/client/talleres/getTalleres.php`);
  }
}
