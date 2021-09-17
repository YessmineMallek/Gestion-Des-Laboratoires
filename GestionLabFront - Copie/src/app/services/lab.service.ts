import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  baseUrl:string='http://localhost:8081/laboratoire'
  constructor(private http:HttpClient) { }
  
  getAll()
  {
    return this.http.get(this.baseUrl);
  }
  viewLab(code:any)
  {
    return this.http.get(this.baseUrl+"/"+code)
  }
  updateLab(code:any,labToUpdate:any)
  {
    console.log(code)
    console.log(labToUpdate)
    return this.http.put(this.baseUrl+"/"+code,labToUpdate)

  }
  addLabo(laboObject:any)
  {
   
    return this.http.post(this.baseUrl+"/add", laboObject);
    
  }

  delete(code:any)
  {
    return this.http.delete(this.baseUrl+"/"+code)
  }
}
