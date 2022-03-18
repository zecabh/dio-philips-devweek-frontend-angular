import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {
  
  private url = 'https://localhost:44363/api/regiao';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor(private http: HttpClient){}
    
  listRegioes(): Observable<Regiao[]> {    
    return this.http.get<Regiao[]>(this.url)       
  }

}
