import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private route:Router,private auth:AuthentificationComponent) { 
  
  }
  r:any
  ngOnInit(): void {
  }
  deconnexion()
  {
    this.r=confirm("voulez-vous se deconnecter")
    if(this.r===true)
   { 
     this.auth.logOut()
     sessionStorage.clear();
     this.route.navigateByUrl('/');

   }
  }
 //pour l'affichage des buttons deconnexion 
  getetat()
{
  return this.auth.getEtat();
}





}
