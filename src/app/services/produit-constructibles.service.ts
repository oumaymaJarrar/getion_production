import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProduitConstructibles } from '../models/produit-constructibles';
import { Observable } from "rxjs";
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class ProduitConstructiblesService {

  host="http://127.0.0.1:8000/api";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private client:HttpClient) { }
  public getAllProdconst():Observable<ProduitConstructibles[]>
  {
    return this.client.get<ProduitConstructibles[]>(this.host+"/getAllProduitConst");
  }

  public getMachineFromProduitC(id:number):Observable<Machine>
  {
    return this.client.get<Machine>(this.host+"/getMachineByProduitId/"+id);
  }

  public addProdconst(prodc:ProduitConstructibles):Observable<any>{
    return this.client.post<any>(this.host+"/addProdConst",prodc);
  }
   public getProduitConstById(id:number):Observable<ProduitConstructibles>
   {
     return this.client.get<ProduitConstructibles>(this.host+"/getProduitCondtById/"+id);
   }
   public updateProduitConst(id:number,prodc:ProduitConstructibles):Observable<any>{
    return this.client.put(this.host+"/updateProdConst/"+id,prodc);
   }
   public DeleteById(id:number):Observable<ProduitConstructibles>{
    return this.client.delete<ProduitConstructibles>(this.host+"/deleteProduitConstr/"+id);
  }
}
