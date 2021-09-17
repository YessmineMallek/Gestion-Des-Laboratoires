import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirecteurGuard implements CanActivate {
  constructor(private route:Router){}
  role:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.role=sessionStorage['role']
      if(this.role==='directeur' || this.role==='admin')
      {
        console.log("directeur")
        return true
      }
      return false;  }
  
}
