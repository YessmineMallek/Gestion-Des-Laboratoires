import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirecteurService {
  baseUrl:string='http://localhost:8081/directeurs'

  constructor(private http:HttpClient) { }

  ajouterDirecteur(directeur:any)
  {
    return this.http.post(this.baseUrl,directeur)
  }
  getLaboratoire(id:number)
  {
    return this.http.get(this.baseUrl+"/laboDuDirecteur/"+id)
  }
  updateDirecteur(directeur:any ,id:any)
  {
    return this.http.put(this.baseUrl+"/"+id,directeur)
  }
}
