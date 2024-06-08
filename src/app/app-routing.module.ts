import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { PagesLegalesComponent } from './pages-legales/pages-legales.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "ListeArtisans", component: ListeArtisansComponent},
  {path: "mentionslegales", component: PagesLegalesComponent},
  {path: "accessibilite", component: PagesLegalesComponent},
  {path: "donneespersonnelles", component: PagesLegalesComponent},
  {path: "cookies", component: PagesLegalesComponent},
  {path: 'category/:category', component: ListeArtisansComponent},
  {path: "**", component: PageErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
