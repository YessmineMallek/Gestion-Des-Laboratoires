import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string='http://localhost:8081/users'

  constructor(private http:HttpClient) { }
  getAll()
  {
    return this.http.get(this.baseUrl)
  }
  getByGrade(grade:String)
  {
    return this.http.get(this.baseUrl+"/userByGrade/"+grade)

  }
  getById(id:String)
  {
    return this.http.get(this.baseUrl+"/"+id)
  }
  getByEmail(email:String)
  {
       
       return this.http.get(this.baseUrl+"/userByEmail/"+email)
      
  }
  deleteUser(id:String)
  {
    return this.http.delete(this.baseUrl+"/"+id);
  }
  passwordMatches(email:String,passwordToDecrypt:String)
  {
    return this.http.get(this.baseUrl+"/"+email+"/"+passwordToDecrypt);
  }
  mettreAjourMotDePasse(id:any,ancienPassword:any,newPassword:any)
  {
    return this.http.put(this.baseUrl+"/modifierMotDePasse/"+id+"/"+ancienPassword,newPassword)
  }
  
}
