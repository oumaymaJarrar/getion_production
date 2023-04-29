import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '../models/machine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  host="http://127.0.0.1:8000/api"
  constructor(private client:HttpClient) { }
  public getAllMachine():Observable<Machine[]>
  {
    return this.client.get<Machine[]>(this.host+"/getAllMachine");
  }
  public getMachineById(id:number):Observable<Machine>
  {
    return this.client.get<Machine>(this.host+"/getMachineById/"+id);
  }
  public addMachine(machine:Machine):Observable<any>{
    return this.client.post<any>(this.host+"/addMachine",machine);
  }

  public updateMachine(id:number,m:Machine):Observable<any>{
    return this.client.put(this.host+"/updateMachine/"+id,m);
   }
  public DeleteById(id:number):Observable<Machine>{
    return this.client.delete<Machine>(this.host+"/deleteMachine/"+id);
  }

}
