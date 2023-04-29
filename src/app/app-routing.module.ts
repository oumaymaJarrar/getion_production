import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AjoutProduitconstComponent } from './components/ajout-produitconst/ajout-produitconst.component';
import { AjoutProduitAchtComponent } from './components/ajout-produit-acht/ajout-produit-acht.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditProduiconstComponent } from './components/edit-produiconst/edit-produiconst.component';
import { AjoutMachineComponent } from './components/ajout-machine/ajout-machine.component';
import { ListeMachineComponent } from './components/liste-machine/liste-machine.component';
import { AjoutAtelierComponent } from './components/ajout-atelier/ajout-atelier.component';
import { AuthGuard } from './auth.guard';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: SignInComponent},
  {path:'create', component: SignUpComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'produit', component: ListeProduitsComponent,canActivate: [AuthGuard]},
  {path:'addProduitCons', component: AjoutProduitconstComponent,canActivate: [AuthGuard]},
  {path:'addProduitAch', component: AjoutProduitAchtComponent,canActivate: [AuthGuard]},
  {path:'editProduitAch/:id', component: EditProduiconstComponent,canActivate: [AuthGuard]},
  {path:'addMachine', component: AjoutMachineComponent,canActivate: [AuthGuard]},
  {path:'machine', component: ListeMachineComponent,canActivate: [AuthGuard]},
  {path:'editMachine/:id', component: EditMachineComponent,canActivate: [AuthGuard]},
  {path:'addAtelier', component: AjoutAtelierComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
