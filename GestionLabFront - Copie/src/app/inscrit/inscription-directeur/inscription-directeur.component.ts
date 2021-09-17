import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directeur } from 'src/app/entites/directeur';
import { DirecteurService } from 'src/app/services/directeur.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inscription-directeur',
  templateUrl: './inscription-directeur.component.html',
  styleUrls: ['./inscription-directeur.component.scss']
})
export class InscriptionDirecteurComponent implements OnInit {
  inscriptionForm:FormGroup=new FormGroup({});
  dataLoded=false
  personne:any
 role:any;
 hide=false;
 
 userObject:any;

  constructor(private formBuild:FormBuilder,
   private directeurService:DirecteurService,private userSer:UsersService,private mat_bar:MatSnackBar ){ }
  
  ngOnInit(): void {
    this.role=sessionStorage["role"]
    if(this.role==='admin')
    {
      console.log(this.role)

      this.inscriptionForm=this.formBuild.group({
      'cin':new FormControl(),
      'email':new FormControl(),
      'nomDirecteur':new FormControl(),
      'directeurDepuis':new FormControl(),
      'telephoneMobile':new FormControl(),
      'password':new FormControl(),

    })
    this.dataLoded=true

  }else
  {
 
    this.userSer.getByEmail(sessionStorage['logedInEmail']).subscribe(data=>{
      this.personne=data;
      console.log(this.personne)
      this.inscriptionForm=this.formBuild.group({
        'cin':new FormControl(this.personne[0].cin),
        'email':new FormControl(this.personne[0].email),
        'nomDirecteur':new FormControl(sessionStorage["logedInNom"]),
        'directeurDepuis':new FormControl(this.personne[0].directeurDepuis),
        'telephoneMobile':new FormControl(this.personne[0].telephoneMobile),
        'password':new FormControl(this.personne[0].password),
      })
      this.dataLoded=true

    })
    
  }
  }
httpmsg!:HttpErrorResponse;
errorMsg!:Error;
  createDirecteur()
  {
    

    console.log(this.inscriptionForm.value)
    if(this.inscriptionForm.value.email != null )
    {
      this.directeurService.ajouterDirecteur(this.inscriptionForm.value).subscribe(
      data=>{
        console.log(data)
        this.mat_bar.open("Creation Effectué avec Succés","",{
          horizontalPosition:"center",
          verticalPosition: "bottom",} )
        
      },
      error=>{
        console.log(error);
        this.httpmsg=error;
        this.errorMsg=this.httpmsg.error;
        if(this.httpmsg.status==400)
            this.mat_bar.open(this.errorMsg.message,"Ok",{
              horizontalPosition:"center",
              verticalPosition: "bottom",} )
            })
    
    }
    else
    {
      this.mat_bar.open("Veuillez Remplir L'Email Directeur","Ok",{
        horizontalPosition:"center",
        verticalPosition: "bottom",

      })
    }
  }
  directeurToChange!: Directeur;
  updateeDirecteur()
  {
    console.log(sessionStorage['id'])
    if(sessionStorage["id"]!=undefined)
    {
       
      this.directeurService.updateDirecteur(this.inscriptionForm.value,sessionStorage['id']).subscribe(data=>
        {
            console.log(data)
            this.mat_bar.open("Modification Effectué avec Succés","",{
              horizontalPosition:"center",
              verticalPosition: "bottom",} )
        })

    
    }
  }

}
