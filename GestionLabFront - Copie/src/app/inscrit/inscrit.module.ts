import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionDirecteurComponent } from './inscription-directeur/inscription-directeur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    InscriptionDirecteurComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers:[
  InscriptionDirecteurComponent,
  {
    provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:5000}
  },
  ]
})
export class InscritModule { }
