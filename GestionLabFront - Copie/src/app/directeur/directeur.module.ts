import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EditLabDirecComponent } from './edit-lab-direc/edit-lab-direc.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ModifierMotDePasseComponent } from './modifier-mot-de-passe/modifier-mot-de-passe.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    EditLabDirecComponent,
    ModifierMotDePasseComponent
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
    MatCardModule
    
   
    
  ],
  exports:[
    EditLabDirecComponent,
    ModifierMotDePasseComponent

  ],
  providers:[ {
    provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:5000}
  },]
})
export class DirecteurModule { }
