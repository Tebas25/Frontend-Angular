import { Injectable } from '@angular/core';
import { IComisionesVentas, IConsultaComisionesVentas } from '../models/comision.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class ComisionService {
  constructor(
    private http: HttpClient,
  ) { }
  obtenerComisiones(dto: IConsultaComisionesVentas): Observable<IComisionesVentas[]> {
    return this.http.post<IComisionesVentas[]>(`${environment.baseUrl}VentaController`, dto);
  }
}
