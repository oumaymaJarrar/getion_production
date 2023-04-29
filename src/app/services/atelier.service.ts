import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atelier } from '../models/atelier';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  host="http://127.0.0.1:8000/api"
  constructor(private client:HttpClient) { }
  public getAllAtelier():Observable<Atelier[]>
  {
    return this.client.get<Atelier[]>(this.host+"/getAllAtelier");
  }
  public addAtelier(atelier:Atelier):Observable<any>{
    return this.client.post<any>(this.host+"/addAtelier",atelier);
  }
}
