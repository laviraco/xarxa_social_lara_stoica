import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListaComponent } from './lista/lista.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavComponent,
    HomeComponent,
    PerfilesComponent,
    RegistrarComponent,
    ListaComponent,
    DetallesComponent,
    AdminComponent,

    // InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
