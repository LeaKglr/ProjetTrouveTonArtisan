import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { PagesLegalesComponent } from './pages-legales/pages-legales.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    FicheArtisanComponent,
    ListeArtisansComponent,
    PagesLegalesComponent,
    PageErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
