import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Formulario {
  nombre: string;
  email: string;
  pais: string;
  comentarios: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl = 'http://localhost:8080/api/formulario';

  constructor(private http: HttpClient) {}

  enviarFormulario(data: Formulario): Observable<string> {
    return this.http.post(this.apiUrl, data, {
      responseType: 'text'
    });
  }
}
