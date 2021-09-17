import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable()
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
 
})
export class AuthentificationComponent implements OnInit {
  public authentiificationForm: FormGroup =new FormGroup({}) ;
  constructor(private route:Router,private formBui:FormBuilder,private userServ:UsersService,private snackBar:MatSnackBar
    ,    private authService: SocialAuthService) { }

    socialUser!: SocialUser;
    isLoggedin!: boolean;  
    user?:String;
  ngOnInit(): void {
    this.authentiificationForm=this.formBui.group(
      {
        'email':new FormControl(),
        'password':new FormControl(),
      }

    )
    
    //se connecter avec google 
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      sessionStorage['logedInEmail']=this.socialUser.email
      sessionStorage["logedInNom"]=this.socialUser.name
      this.userServ.getByEmail(this.socialUser.email).subscribe(
        data=>{
          this.personne=data;
          if(this.personne.length!=0)
          {
                    sessionStorage['role']=this.personne[0].grade
                    if(this.personne[0].grade==="admin" )
                    {
                      sessionStorage['login']=true
                      document.location.href="/admin"
                    
                    
                    }else{
                      //si l'utilisateur est un directeur
                        
                                if( this.personne[0].grade==="directeur")
                                {
                                  sessionStorage['login']=true
                                  sessionStorage['id']=  this.personne[0].id
                                 document.location.href="/directeur"
                                }
                              
                              
                          
                    }
            
      //si l'email saisie n'existe pas dans la base de données
        }
        else{
          this.snackBar.open("Votre Compt n'existe pas","",
          {duration: 3000,
          verticalPosition:"bottom"})
        } 
   
          
        })
      
    });
  }
  personne:any;
  login:any;


  //Se Connecter avec login et mot de passe
  SingIn()
  { /**1)recuperer l'utilisateur par l'email
      2) verifier le grade du personne et se diriger a la page selon leur Grade   */
     if(this.authentiificationForm.value.email != null && this.authentiificationForm.value.password !=null  )
     {
        this.userServ.getByEmail(this.authentiificationForm.value.email).subscribe(
          data=>{
            this.personne=data;

            if(this.personne.length!=0)
            {
                      sessionStorage['role']=this.personne[0].grade
                      sessionStorage['logedInEmail']=this.authentiificationForm.value.email
                      sessionStorage["logedInNom"]=this.personne[0].nomDirecteur


                      if(this.personne[0].grade==="admin" && this.personne[0].password===this.authentiificationForm.value.password)
                      {
                        sessionStorage['login']=true
                        document.location.href="/admin"
                      
                      
                      }else{
                        //si l'utilisateur est un directeur
                          
                              this.userServ.passwordMatches(this.authentiificationForm.value.email,this.authentiificationForm.value.password).subscribe(
                                data=>{
                                  console.log(data)
                                  if(data===true && this.personne[0].grade==="directeur")
                                  {
                                    sessionStorage['login']=true
                                    sessionStorage['id']=  this.personne[0].id
                                    document.location.href="/directeur"
                                  }else
                                  {
                                    this.snackBar.open ("votre mot de passe est incorrecte","",
                                    {duration: 3000,
                                    verticalPosition:"bottom"})
                                  }
                                })
                                
                            
                      }
              
        //si l'email saisie n'existe pas dans la base de données
          }else{
            this.snackBar.open("Votre Compt n'existe pas","",
            {duration: 3000,
            verticalPosition:"bottom"})
          } } )
     }//si les champs sont vide
     else
    {
      this.snackBar.open("Remplir Tous Les Champs ","",
      {duration: 3000,
      verticalPosition:"bottom"},
      )
    }
 
  }


  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

 }


   //pour l'affichage des buttons deconnexion 
   getEtat()
   {
     if (sessionStorage['login']=== undefined  )  
      {
        //console.log("hey")
        return 'false'
      }
        
     else
         return 'true'
    
   }
   logOut(): void {
  
      this.authService.signOut().then().catch();
    
  
    
  }

}
