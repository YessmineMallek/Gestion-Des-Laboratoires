import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Directeur } from 'src/app/entites/directeur';
import { DirecteurService } from 'src/app/services/directeur.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modifier-mot-de-passe',
  templateUrl: './modifier-mot-de-passe.component.html',
  styleUrls: ['./modifier-mot-de-passe.component.scss']
})
export class ModifierMotDePasseComponent implements OnInit {
  modifierMotDePasseForm:FormGroup=new FormGroup({});
  constructor(private userServ:UsersService,private formBuil:FormBuilder,private snackBar:MatSnackBar,private direcServ:DirecteurService) { }

  ngOnInit(): void {
    this.modifierMotDePasseForm=this.formBuil.group(
      {
        'cin':new FormControl(),
        'password':new FormControl(),
        'newPassword':new FormControl(),
      }
    )
  }
  ancienMotDePasse:any;
  nouveauMotDePasse:any;
  d!:any;
  directeurWithNewPassword!:Directeur;
  modifierMotDePasse()
  {
    this.ancienMotDePasse=this.modifierMotDePasseForm.value.password;
    this.nouveauMotDePasse=this.modifierMotDePasseForm.value.newPassword;
   
    this.userServ.passwordMatches(sessionStorage['logedInEmail'],this.ancienMotDePasse).subscribe(
      data=>
      {
        if (this.modifierMotDePasseForm.value.newPassword!=null &&  this.modifierMotDePasseForm.value.password!=null )
       {
                if(data===true )
                {
                  
                      this.userServ.mettreAjourMotDePasse(sessionStorage['id'],this.ancienMotDePasse,this.nouveauMotDePasse).subscribe(
                        (data2: any)=>{
                        console.log(data2)
                        this.snackBar.open("Mettre a jour effectué avec succés","",{
                          verticalPosition:"bottom",
                        })
                      })
                  
                }else
                {
                  this.snackBar.open("Ancien Mot De Passe est Incorrecte","",{
                    verticalPosition:"bottom",
                  })
                }
       }else{
        this.snackBar.open("Remplir les Champs","",{
          verticalPosition:"bottom",
        })
       }
     
      }
    )

  
  }

}
