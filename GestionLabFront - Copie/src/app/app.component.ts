import { Component } from '@angular/core';
import { AuthentificationComponent } from './authentification/authentification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestionLab';
  constructor(private auth:AuthentificationComponent){

  }
  getEtat()
  {
    
    return this.auth.getEtat()
  }
  getRole()
  {
    return sessionStorage['role']
  }

}
