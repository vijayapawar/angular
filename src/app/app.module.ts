import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot
    ([{
      path :'Home',component:HomeComponent},
      {path:'AboutUs',component:AboutusComponent},
      {path:'Contactus',component:ContactusComponent},
      {path:'Services',component:ServicesComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
