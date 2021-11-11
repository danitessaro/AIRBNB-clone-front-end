import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooBarComponent } from './too-bar/too-bar.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { HomeLocatarioComponent } from './home-locatario/home-locatario.component';
import { HomeCadastroClienteComponent } from './home-cadastro-cliente/home-cadastro-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import { HomeListCidadesComponent } from './home-list-cidades/home-list-cidades.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeImagensComponent } from './home-imagens/home-imagens.component';
import { HomeLocalizarComponent} from './home-localizar/home-localizar.component';

@NgModule({
  declarations: [
    AppComponent,
    TooBarComponent,
    HomeClienteComponent,
    HomeLocatarioComponent,
    HomeCadastroClienteComponent,
    HomeLocalizarComponent,
    HomeListCidadesComponent,
    HomeImagensComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    RouterModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
