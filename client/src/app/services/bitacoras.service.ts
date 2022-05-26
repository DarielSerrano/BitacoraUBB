import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Bitacora} from '../models/Bitacora'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitacorasService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getBitacoras (){
    return this.http.get(`${this.API_URI}/bitacoras`);
  }

  getBitacora (id: String){
    return this.http.get(`${this.API_URI}/bitacoras/${id}`);
  }

  deleteBitacora (id: String){
    return this.http.delete(`${this.API_URI}/bitacoras/${id}`);
  }

  saveBitacora (bitacora: Bitacora){
    return this.http.post(`${this.API_URI}/bitacoras`,bitacora);
  }
  
  updateBitacora (id: String, updatedBitacora: Bitacora): Observable <any> {
    return this.http.put(`${this.API_URI}/bitacoras/${id}`,updatedBitacora);
  }
  

}
