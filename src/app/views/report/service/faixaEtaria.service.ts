import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaixaEtaria } from '../model/faixaEtaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {
  
  private url = 'https://localhost:44363/api/faixaEtaria';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor(private http: HttpClient){}

  listFaixaEtaria(): Observable<FaixaEtaria[]> {    
    return this.http.get<FaixaEtaria[]>(this.url)
  }

}
