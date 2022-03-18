import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidenciaExame } from '../model/incidenciaExame';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaExameService {
  
  private url = 'https://localhost:44363/api/incidenciaExame';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor(private http: HttpClient){}
    
  listIncidenciaExame(): Observable<IncidenciaExame[]> {    
    return this.http.get<IncidenciaExame[]>(this.url)       
  }

}
