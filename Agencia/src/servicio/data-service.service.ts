import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from 'src/app/Class/Servicio';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://localhost:7263/api';

  constructor(private http: HttpClient) { }

  GetData(api: any) {
    return this.http.get(`${this.apiUrl}/${api}`);
  }
  UpdateData(api: any, data: any) {
    return this.http.put(`${this.apiUrl}/${api}`, data);
  }
  DeleteData(api: any) {
    return this.http.delete(`${this.apiUrl}/${api}`);
  }
  InsertData(api: any, data: any) {
    return this.http.post(`${this.apiUrl}/${api}`, data);
  }

  GetServicios(api: any): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.apiUrl}/${api}`);
  }
  GetVehiculos(api: any){
    return this.http.get(`${this.apiUrl}/${api}`);
  }
  GetUltimoFolio(api: any){
    return this.http.get(`${this.apiUrl}/${api}`);
  }
  GetRefacciones(api: any){
    return this.http.get(`${this.apiUrl}/${api}`);
  }
  InsertServicios(api: any, data: any) {
    return this.http.post(`${this.apiUrl}/${api}`, data);
  }
  InsertServiciosRefacciones(api: any, data: any) {
    return this.http.post(`${this.apiUrl}/${api}`, data);
  }
  InsertVehiculos(api: any, data: any) {
    return this.http.post(`${this.apiUrl}/${api}`, data);
  }
}
