import { Component } from '@angular/core';
import { ArtisansService, Artisans } from '../artisans.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  title = "Comment trouver mon artisan ?"
  artisansdumois = "Nos 3 meilleurs artisans du mois !"
  category: string | null = null;
  filteredArtisans: Artisans[] = [];

  etapes : {title: string, description: string, nombre: number}[] = [
    {nombre: 1, title: "Choisir la catégorie d'artisanat dans le menu", description: ""},
    {nombre: 2, title: "Choisir un artisan", description: ""},
    {nombre: 3, title: "Le contacter via le formulaire de contact", description: ""},
    {nombre: 4, title: "Une réponse sera apportée sous 48h", description: ""},
  ]

  constructor(private artisansService : ArtisansService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.topArtisans = await lastValueFrom(this.artisansService.getTopArtisans());

    } catch (error) {
      console.error('Erreur', error);
    }
  }

  topArtisans: Artisans[] = [];

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }
}
