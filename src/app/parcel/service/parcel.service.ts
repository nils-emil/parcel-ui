import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Parcel} from "../parcel.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  isStockKeepingUnitUnique(stockKeepingUnit: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/stock-keeping-unit/${stockKeepingUnit}/is-valid`);
  }

  addParcel(parcel: Parcel): Observable<Parcel> {
    return this.http.post<Parcel>(`${this.apiUrl}/parcel`, parcel);
  }

  getParcels(queryParams: any): Observable<Parcel[]> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(
      key => queryParams[key] && (params = params.append(key, queryParams[key]))
    );
    return this.http.get<Parcel[]>(`${this.apiUrl}/parcels`, {params: queryParams});
  }

}
