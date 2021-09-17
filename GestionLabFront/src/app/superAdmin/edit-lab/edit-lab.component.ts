import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Directeur } from 'src/app/entites/directeur';
import { Laboratoire } from 'src/app/entites/laboratoire';
import { DirecteurService } from 'src/app/services/directeur.service';
import { LabService } from 'src/app/services/lab.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.scss']
})
export class EditLabComponent implements OnInit {
   
  editLaboratoireForm: FormGroup =new FormGroup({}) ;
   labDetail:any;
   laboCode:any;
  dataLoaded=false; 
   listeDirecteurs:any;
   directeur!: Directeur;


  constructor(private activedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private laboServ:LabService,
    private userService:UsersService,
    private snackBar:MatSnackBar,private laboDirecteur:DirecteurService
    ) { }

  ngOnInit(): void {
    //recuperer le code du laboratoire a modifier
    this.activedRoute.params.subscribe(
      data=>{
      this.laboCode=data.code;});


      //remplir le formulaire avec données au laboratoire a modifier
            this.laboServ.viewLab(this.laboCode)
            .toPromise()
            .then(
              data =>{
                //console.log(data)
              this.labDetail=data,
              this.editLaboratoireForm=this.formBuilder.group
              (
                {
                  'type':new FormControl(this.labDetail.type),
                  'denomination':new FormControl(this.labDetail.denomination),
                  'nomCompletEnArabe':new FormControl(this.labDetail.nomCompletEnArabe),
                  'nomCompletEnAnglais':new FormControl(this.labDetail.nomCompletEnAnglais),
                  'acronyme':new FormControl(this.labDetail.acronyme),
                  'code':new FormControl(this.labDetail.code),
                  'dateCreation':new FormControl(this.labDetail.dateCreation),
                  'universite':new FormControl(this.labDetail.universite),
                  'institution':new FormControl(this.labDetail.institution),
                  'domaine':new FormControl(this.labDetail.domaine),
                  'discipline':new FormControl(this.labDetail.discipline),
                  'adresseOfficielle':new FormControl(this.labDetail.adresseOfficielle),
                  'telephone':new FormControl(this.labDetail.telephone),
                  'siteWeb':new FormControl(this.labDetail.siteWeb),
                  'fax':new FormControl(this.labDetail.fax),
                  'specialite':new FormControl(this.labDetail.specialite),
                  'directeurCin':new FormControl(this.labDetail.directeurCin.id)
                  } );
                  this.dataLoaded=true;

                }
            )
        
        this.userService.getByGrade('directeur').subscribe(
          data=>
          {
            //console.log(data)
            this.listeDirecteurs=data;
          }
        )

    
  }
  personne:any
  laboratoire!: Laboratoire;


  editLab(){
    /*1)recuperer le directeur selectionner (la liste deroulante retourne une chaine je doit avoir un objet Directeur pour creer une Labo)
      2)creer une laboratoire */
  console.log(this.editLaboratoireForm.value)
  console.log(this.editLaboratoireForm.value.directeurCin)
  this.userService.getById(this.editLaboratoireForm.value.directeurCin).subscribe(
    data=>{
     console.log(data)
      this.personne=data
      this.directeur=new Directeur(this.personne[0].id,this.personne[0].cin,this.personne[0].grade,this.personne[0].telephoneMobile,this.personne[0].email,this.personne[0].directeurDepuis,this.personne[0].nomDirecteur,this.personne[0].password)
      this.laboratoire=new Laboratoire(this.editLaboratoireForm.value.code,this.editLaboratoireForm.value.type,
        this.editLaboratoireForm.value.denomination,
        this.editLaboratoireForm.value.nomCompletEnArabe,
        this.editLaboratoireForm.value.nomCompletEnAnglais,
        this.editLaboratoireForm.value.acronyme,
        this.editLaboratoireForm.value.dateCreation,
        this.editLaboratoireForm.value.universite,
        this.editLaboratoireForm.value.institution,
        this.editLaboratoireForm.value.domaine,
        this.editLaboratoireForm.value.discipline,
        this.editLaboratoireForm.value.specialite,
        this.editLaboratoireForm.value.siteWeb,
        this.editLaboratoireForm.value.adresseOfficielle,
        this.editLaboratoireForm.value.telephone,
        this.editLaboratoireForm.value.fax,
        this.directeur );
        this.laboServ.updateLab(this.laboCode,this.laboratoire).subscribe(
          data=>{
            //console.log(data)
            this.snackBar.open("Mise a jour effectué avec succés","",{verticalPosition:"bottom"})
    
          }
        )
    },
    err=>{
      console.log(err)
    }
  )
   
   
  }
  onChange(idDireceteur:any) {
    this.laboDirecteur.getLaboratoire(idDireceteur).subscribe(
      data=>
      {
        console.log(data);
        if(data!=null)
        {
          this.snackBar.open("C'est un directeur dans une autre Laboratoire","ok",{
            verticalPosition:"bottom",
            duration:500
            
          })
        }
      }
    )
    
}

   

}
