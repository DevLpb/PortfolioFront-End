import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.URL + 'personas/';


  constructor(private httpClient: HttpClient) { } 

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

 // Creación y eliminación de personas. Actualmente sin uso.
 // public save(persona: Persona): Observable<any>{
 //   return this.httpClient.post<any>(this.URL + 'create', persona);
 // }

 // public delete(id: number): Observable<any>{
 //  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
 // }
}
