import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  personne:any;
  grade:any;
  dataLoded=false;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {  
    
    if(this.getGrade()==='directeur')
    {
    this.userService.getById(sessionStorage['id']).subscribe(data=>{
      this.personne=data;
      this.dataLoded=true;
    })
  }

  }
 
  getGrade()
  {
        //console.log(sessionStorage['role'])
      if(sessionStorage['role']!=undefined)
      { 
        
        return sessionStorage['role']
      }
  }

  
}
