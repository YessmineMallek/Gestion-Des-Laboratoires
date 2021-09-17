import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { LaboratoireModule } from './superAdmin/laboratoire.module';
import {MatSidenavModule} from '@angular/material/sidenav';


import { HttpClientModule } from '@angular/common/http';
import { InscritModule } from './inscrit/inscrit.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DirecteurModule } from './directeur/directeur.module';

import {MatCardModule} from '@angular/material/card';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
  ],
   
    
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LaboratoireModule,
    InscritModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    DirecteurModule,
    MatCardModule, 
    SocialLoginModule,


  ],
  providers: [
    
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '249634602734-b7jtlkcsp8f0l978fngppi0thsqj50fs.apps.googleusercontent.com'
              )
            },
            
          ]
        } as SocialAuthServiceConfig,
      },
  AuthentificationComponent  
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
