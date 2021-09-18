import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DirecteurService } from 'src/app/services/directeur.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Directeur } from 'src/app/entites/directeur';
import { Laboratoire } from 'src/app/entites/laboratoire';
import { LabService } from 'src/app/services/lab.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-lab-direc',
  templateUrl: './edit-lab-direc.component.html',
  styleUrls: ['./edit-lab-direc.component.scss']
})
export class EditLabDirecComponent implements OnInit {
  boolean=true
  dataLoded=false;
  listeDirecteurs:any
  editLabForm:FormGroup=new FormGroup({})
  
  
  constructor(private formBuild:FormBuilder,private directeurService:DirecteurService,private userService:UsersService,
    private laboServ:LabService,private snackBar:MatSnackBar) { }
  labo:any;
  directeur:any;
  instution:any;
  ngOnInit(): void {

    console.log(sessionStorage['id'])
    this.directeurService.getLaboratoire(sessionStorage['id']).subscribe(
      data=>{
        console.log(data)
        if(data!=null)//le directeur a ete affecté a une laboratoire
       {
        this.labo=data,
        this.directeur=this.labo.directeurCin.id+" || "+this.labo.directeurCin.nomDirecteur
        console.log(this.directeur)

       
          this.instution=this.labo.institution
          console.log(this.instution)

      
        this.editLabForm=this.formBuild.group({
          'code':new FormControl(this.labo.code ),
          'type':new FormControl(this.labo.type),
          'denomination':new FormControl(this.labo.denomination),
          'nomCompletEnArabe':new FormControl(this.labo.nomCompletEnArabe),
          'nomCompletEnAnglais':new FormControl(this.labo.nomCompletEnAnglais),
          'acronyme':new FormControl(this.labo.acronyme),
          'dateCreation':new FormControl(this.labo.dateCreation),
          'universite':new FormControl(this.labo.universite),
          'institution':new FormControl(this.labo.institution),
          'domaine':new FormControl(this.labo.domaine),
          'discipline':new FormControl(this.labo.discipline),
          'adresseOfficielle':new FormControl(this.labo.adresseOfficielle),
          'telephone':new FormControl(this.labo.telephone),
          'siteWeb':new FormControl(this.labo.siteWeb),
          'fax':new FormControl(this.labo.fax),
          'specialite':new FormControl(this.labo.specialite),
          'directeurCin':new FormControl(this.directeur)
        }
        )
        this.dataLoded=true;

       } else// le directeur n'admet pas du laboratoire
       {
          this.snackBar.open("Vous-Etes  affecté a aucun Laboratoire")
       }
      }
        
    )
  }
  personne:any
  laboratoire:any
  edit()
  {
    this.userService.getByEmail(sessionStorage["logedInEmail"]).subscribe(
      data=>{
        console.log(data)
        this.personne=data
        this.laboratoire=new Laboratoire(this.editLabForm.value.code,this.editLabForm.value.type,
          this.editLabForm.value.denomination,
          this.editLabForm.value.nomCompletEnArabe,
          this.editLabForm.value.nomCompletEnAnglais,
          this.editLabForm.value.acronyme,
          this.editLabForm.value.dateCreation,
          this.editLabForm.value.universite,
          this.editLabForm.value.institution,
          this.editLabForm.value.domaine,
          this.editLabForm.value.discipline,
          this.editLabForm.value.specialite,
          this.editLabForm.value.siteWeb,
          this.editLabForm.value.adresseOfficielle,
          this.editLabForm.value.telephone,
          this.editLabForm.value.fax,
          this.personne[0] );
          this.laboServ.updateLab(this.editLabForm.value.code,this.laboratoire).subscribe(
            data=>{
              console.log(data)
              this.snackBar.open("Mise A Jour Effectée avec succés","",{verticalPosition:"bottom"})
      
            }
          )
      }
    )

  }
  
}
