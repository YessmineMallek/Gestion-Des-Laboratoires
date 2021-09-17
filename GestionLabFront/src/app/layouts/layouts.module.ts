import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule } from '@angular/router';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component'; 

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    FooterComponent,
  HeaderComponent,
  SideNavBarComponent
],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule


    
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SideNavBarComponent

  ]
})
export class LayoutsModule { }
