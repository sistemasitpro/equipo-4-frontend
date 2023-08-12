/* eslint-disable prettier/prettier */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeographicDataService {
  // eslint-disable-next-line no-empty-function
  constructor(private http: HttpClient) {}

  getProvinces(): Observable<any> {
    const url = 'https://public.opendatasoft.com/api/records/1.0/search/?rows=40&sort=provincia&start=0&dataset=provincias-espanolas&timezone=America%2FSantiago&lang=en';
    return this.http.get<any>(url);
  }

  // getCitiesByProvinceId(provinceId: string): Observable<any> {
  //   const url = `https://servicios.ign.es/wfs-inspire/unidades-administrativas?service=WFS&request=GetFeature&typeName=au:UnidadAdministrativa&outputFormat=application/json&srsName=EPSG:4326&cql_filter=ID_ADM_1='${provinceId}'`;
  //   return this.http.get<any>(url);
  // }

}
