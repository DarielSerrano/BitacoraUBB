import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Nota} from '../models/Nota'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  API_URI = 'http://146.83.198.35:1092/api'

  constructor(private http: HttpClient) { }

  getNotas (){
    return this.http.get(`${this.API_URI}/notas`);
  }

  getNota (id: String){
    return this.http.get(`${this.API_URI}/notas/${id}`);
  }

  getPersonalData (id: String){
    return this.http.get(`${this.API_URI}/notas/detail/${id}`);
  }

  deleteNotas (id: String){
    return this.http.delete(`${this.API_URI}/notas/${id}`);
  }

  saveNotas (Notas: Nota){
    console.log("API/INSERT");
    console.log(Notas);
    return this.http.post(`${this.API_URI}/notas`,Notas);
  }

  updateNotas (id: String|number|undefined, updatedNotas: Nota): Observable <Nota> {
    console.log("API/update");
    console.log(updatedNotas);
    return this.http.put(`${this.API_URI}/Notas/${id}`,updatedNotas);
  }
}
