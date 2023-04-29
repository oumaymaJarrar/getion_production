import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProduitAchetable} from "../models/produit-achetable";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitAchetableService {

  host="http://127.0.0.1:8000/api"
  constructor(private client:HttpClient) { }
  public getAllProdAcht():Observable<ProduitAchetable[]>
  {
    return this.client.get<ProduitAchetable[]>(this.host+"/getAllProduitAcht");
  }
  public addProdAcht(prodc:ProduitAchetable):Observable<any>{
    return this.client.post<any>(this.host+"/addProdAcht",prodc);
  }
   public  getProduitAchtById(id:number):Observable<void>{
    return this.client.get<void>(this.host+"/getProduitAchtById/"+id)
   }
   public updateProduitConst(prodc:ProduitAchetable):Observable<ProduitAchetable>{
    return this.client.put<ProduitAchetable>(this.host+"/updateProdAcht",prodc);
   }
   public DeleteById(id:number):Observable<ProduitAchetable>{
    return this.client.delete<ProduitAchetable>(this.host+"/deleteProduitAcht/"+id);
  }
}