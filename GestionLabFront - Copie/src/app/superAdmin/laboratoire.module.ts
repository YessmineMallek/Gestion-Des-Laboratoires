import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLabComponent } from './add-lab/add-lab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListLabComponent } from './list-lab/list-lab.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { EditLabComponent } from './edit-lab/edit-lab.component';
import {MatRadioModule} from '@angular/material/radio';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DeleteLaboComponent } from './delete-labo/delete-labo.component';
import { ListDirecteursComponent } from './list-directeurs/list-directeurs.component';
import { DeleteDirecteurComponent } from './delete-directeur/delete-directeur.component';
import { Directeur } from '../entites/directeur';
import { DirecteurModule } from '../directeur/directeur.module';
import {MatCardModule} from '@angular/material/card';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AddLabComponent,
    ListLabComponent,
    EditLabComponent,
    DeleteLaboComponent,
    ListDirecteursComponent,
    DeleteDirecteurComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports:[
    AddLabComponent,
    ListLabComponent,
    EditLabComponent,
    DeleteLaboComponent,
    ListDirecteursComponent,
    DeleteDirecteurComponent,
    


  ],
  providers:[
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:1000}
    },
  ],
  bootstrap: [AddLabComponent]

})
export class LaboratoireModule { }
