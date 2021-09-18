import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Directeur } from 'src/app/entites/directeur';
import { Laboratoire } from 'src/app/entites/laboratoire';
import { DirecteurService } from 'src/app/services/directeur.service';
import { LabService } from 'src/app/services/lab.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {
  addLaboratoireForm: FormGroup = new FormGroup({}) ;
   listeDirecteurs:any;//pour la recuperation des directeurs



  constructor(private formBuilder:FormBuilder,
    private laboServ:LabService,
    private userService:UsersService,private snackBar:MatSnackBar,private laboDirecteur:DirecteurService,private route:Router ) {  }
    existe=false;

  ngOnInit(): void {
    this.existe=false;

    this.addLaboratoireForm=this.formBuilder.group(
    {
      
        'code':new FormControl('', Validators.required),
        'type':new FormControl(''),
        'denomination':new FormControl('',Validators.required),
        'nomCompletEnArabe':new FormControl(''),
        'nomCompletEnAnglais':new FormControl(),
        'acronyme':new FormControl(''),
        'dateCreation':new FormControl('',Validators.required),
        'universite':new FormControl(''),
        'institution':new FormControl(''),
        'domaine':new FormControl(''),
        'discipline':new FormControl(''),
        'adresseOfficielle':new FormControl(''),
        'telephone':new FormControl(''),
        'siteWeb':new FormControl(''),
        'fax':new FormControl(''),
        'specialite':new FormControl(''),
        'directeurCin':new FormControl('',Validators.required)
    }
   )

  //  pour remplir la liste deroulante des directeurs
    this.userService.getByGrade('directeur').subscribe(
      data=>
      {
        //console.log(data)
        this.listeDirecteurs=data;
      });

  }
  directeur!: Directeur;
  personne:any;
  laboratoire!:Laboratoire;
  errMsg!: HttpErrorResponse ;
  error!:Error;
  

  AddLabo(){
    /*1)Recuperer le directeur selectionner
      2) creer un laboratoire avec le directeur selectionner
      3)l'ajouter a la base de données*/

      this.userService.getById(this.addLaboratoireForm.value.directeurCin).subscribe(
      data=>{
        console.log(data)
              this.personne=data

            this.laboratoire=new Laboratoire(this.addLaboratoireForm.value.code,this.addLaboratoireForm.value.type,
            this.addLaboratoireForm.value.denomination,
            this.addLaboratoireForm.value.nomCompletEnArabe,
            this.addLaboratoireForm.value.nomCompletEnAnglais,
            this.addLaboratoireForm.value.acronyme,
            this.addLaboratoireForm.value.dateCreation,
            this.addLaboratoireForm.value.universite,
            this.addLaboratoireForm.value.institution,
            this.addLaboratoireForm.value.domaine,
            this.addLaboratoireForm.value.discipline,
            this.addLaboratoireForm.value.specialite,
            this.addLaboratoireForm.value.siteWeb,
            this.addLaboratoireForm.value.adresseOfficielle,
            this.addLaboratoireForm.value.telephone,
            this.addLaboratoireForm.value.fax,
            this.personne[0]);
           //Ajout
          
           if(this.existe===false)//le directeur selectionner n'est pas directeur dans une autre labo
           {
                    this.laboServ.addLabo(this.laboratoire).subscribe(
                      data=>{
                        this.snackBar.open("Ajout Effectuée avec Succés ",'',{verticalPosition:"bottom"})
                        this.route.navigateByUrl("/admin/listLabo")
                      },
                      error=> {
                        this.errMsg=error;
                        this.error=this.errMsg.error;
                      if(this.errMsg.status===400)
                          this.snackBar.open(this.error.message,'',{verticalPosition:"bottom"})
                      });
                    
       

           }
           else
           {
            this.existe=false;

           
             this.snackBar.open("C'est un directeur dans une autre Laboratoire","",{
               verticalPosition:"bottom",
               duration:500,
             })
           }
           
          
            
            },
            err=>
            {
              console.log(err)
            }
  
    )
    

  }
  onChange(idDireceteur:any) {
    this.existe=false;
    this.laboDirecteur.getLaboratoire(idDireceteur).subscribe(
      data=>
      {
        console.log(data);
        if(data!=null)
        {
          this.existe=true
          this.snackBar.open("C'est un directeur dans une autre Laboratoire","ok",{
            verticalPosition:"bottom",
            duration:500
            
          })
        }
      }
    )
    
}

}




 



