import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _url: string = `${environment.url}`;

  constructor(private _http: HttpClient) { }

  getBrands(vehicleType: string): Observable<Brand[]> {
    return this._http.get<Brand[]>(`${this._url}/${vehicleType}/brands`);
  }

  getCarModels(vehicleType: string, brandId: string): Observable<Brand[]> {
    return this._http.get<Brand[]>(`${this._url}/${vehicleType}/brands/${brandId}/models`);
  }

  getModelsYears(vehicleType: string, brandId: string, modelId: string): Observable<Brand[]> {
    return this._http.get<Brand[]>(`${this._url}/${vehicleType}/brands/${brandId}/models/${modelId}/years`);
  }

  getFipeInfo(vehicleType: string, brandId: string, modelId: string, year: string): Observable<Car> {
    return this._http.get<Car>(`${this._url}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${year}`);
  }
}
