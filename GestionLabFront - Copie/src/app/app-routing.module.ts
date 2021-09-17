import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecteurModule } from './directeur/directeur.module';
import { EditLabDirecComponent } from './directeur/edit-lab-direc/edit-lab-direc.component';
import { InscriptionDirecteurComponent } from './inscrit/inscription-directeur/inscription-directeur.component';
import { AddLabComponent } from './superAdmin/add-lab/add-lab.component';
import { DeleteLaboComponent } from './superAdmin/delete-labo/delete-labo.component';
import { EditLabComponent } from './superAdmin/edit-lab/edit-lab.component';
import { ListDirecteursComponent } from './superAdmin/list-directeurs/list-directeurs.component';
import { ListLabComponent } from './superAdmin/list-lab/list-lab.component';
import { AdminGuard } from './services/guards/admin.guard';
import { DirecteurGuard } from './services/guards/directeur.guard';
import { DeleteDirecteurComponent } from './superAdmin/delete-directeur/delete-directeur.component';
import { ModifierMotDePasseComponent } from './directeur/modifier-mot-de-passe/modifier-mot-de-passe.component';


const routes: Routes = [
  {
    path:'admin' ,canActivate:[AdminGuard], children:[
      {
        path:'',component:ListLabComponent
      },
      {
        path:"listDirecteur",component:ListDirecteursComponent
    
      },
      {
        path:"addLabo",component:AddLabComponent 
      },
      {
        path:"edit/:code",component:EditLabComponent
      },
     
      {
        path:"delete/:code",component:DeleteLaboComponent
      },
      {
        path:"addLabo",component:AddLabComponent 
      },
      {
        path:"listLabo",component:ListLabComponent
      },
      
    ]
  },
  {
    path:"deleteDirecteur/:id",component:DeleteDirecteurComponent,canActivate:[AdminGuard]
  },
  {
    path:'directeur' ,canActivate:[DirecteurGuard],children:[
      {
        path:"",component:EditLabDirecComponent
      },
      {
        path:"modifierPassword",component:ModifierMotDePasseComponent
      },
      {
        path:"edit",component:EditLabDirecComponent
      },
      
    
    ]
  },
 
  {
    path:"inscriptionDirecteur",component:InscriptionDirecteurComponent,canActivate:[DirecteurGuard]
  },
 
  
 
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
