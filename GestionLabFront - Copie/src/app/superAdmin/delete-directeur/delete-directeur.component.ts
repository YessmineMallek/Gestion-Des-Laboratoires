import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DirecteurService } from 'src/app/services/directeur.service';

@Component({
  selector: 'app-delete-directeur',
  templateUrl: './delete-directeur.component.html',
  styleUrls: ['./delete-directeur.component.scss']
})
export class DeleteDirecteurComponent implements OnInit {
  directeurId:any
  constructor(private activatedRoute:ActivatedRoute,private userServ:UsersService,private route:Router,private snackBar:MatSnackBar,private directeurServ:DirecteurService) { }
  httpMsg!:HttpErrorResponse;
  errorMsg!:Error;
  ngOnInit(): void {
    //recuperer le code du lien 
    this.activatedRoute.params.subscribe(data=>{
      this.directeurId=data.id
    });
    console.log(this.directeurId)
   this.directeurServ.getLaboratoire(this.directeurId).subscribe(data=>
    {
      //verifie si le directeur est un directeur dans une labo
      if(data=== null)
      {
          this.userServ.deleteUser(this.directeurId).subscribe(
            data=>{
              //console.log(data)    
            },
            err=>{
              this.httpMsg=err ;
              this.errorMsg=this.httpMsg.error
              if(this.httpMsg.status==400)
                  this.snackBar.open(this.errorMsg.message,"",{duration:1000})
      
            });
      
    }else
    {
      this.snackBar.open("C'est un directeur a une Laboratoire","",{duration:2000})
    }
 
    this.route.navigateByUrl("/admin/listDirecteur")
    
  });
}

}
