import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AjoutMachineComponent } from './components/ajout-machine/ajout-machine.component';
import { AjoutProduitAchtComponent } from './components/ajout-produit-acht/ajout-produit-acht.component';
import { AjoutProduitconstComponent } from './components/ajout-produitconst/ajout-produitconst.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
import { EditProduiconstComponent } from './components/edit-produiconst/edit-produiconst.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeMachineComponent } from './components/liste-machine/liste-machine.component';
import { ListeAtelierComponent } from './components/liste-atelier/liste-atelier.component';
import { AjoutAtelierComponent } from './components/ajout-atelier/ajout-atelier.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    ListeProduitsComponent,
    AccueilComponent,
    AjoutProduitconstComponent,
    AjoutProduitAchtComponent,
    AjoutMachineComponent,
    EditMachineComponent,
    EditProduiconstComponent,
    ListeMachineComponent,
    ListeAtelierComponent,
    AjoutAtelierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
