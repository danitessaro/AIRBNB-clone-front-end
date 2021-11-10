import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooBarComponent } from './too-bar/too-bar.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { HomeLocatarioComponent } from './home-locatario/home-locatario.component';
import { HomeCadastroClienteComponent } from './home-cadastro-cliente/home-cadastro-cliente.component';
import { HomeImoveisComponent } from './home-imoveis/home-imoveis.component';

@NgModule({
  declarations: [
    AppComponent,
    TooBarComponent,
    HomeClienteComponent,
    HomeLocatarioComponent,
    HomeCadastroClienteComponent,
    HomeImoveisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
