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
    {nombre: 1, title: "Choisir la catégorie d'artisanat dans le menu", description: "Dans la barre de navigation, vous pouvez trouver un menu avec les différentes catégories des artisans. Ainsi, en cliquant sur la catégorie que vous souhaitez, vous allez pouvoir trouver tous les artisans de ce domaine (Bâtiment, Services, Fabrication et Alimentation)."},
    {nombre: 2, title: "Choisir un artisan", description: "Une fois que vous avez cliqué sur la catégorie d'artisanat, vous trouverez une liste d'artisan de cette catégorie. Lorsque vous avez choisi votre artisan, cliquez sur sa fiche pour en savoir plus."},
    {nombre: 3, title: "Le contacter via le formulaire de contact", description: "Si vous êtes satisfait de votre choix, un formulaire de contact vous est proposé. Remplissez les informations nécessaires : nom, objet et message. Puis, cliquez sur le bouton 'Envoyer' afin de contacter l'artisan."},
    {nombre: 4, title: "Une réponse sera apportée sous 48h", description: "Félicitations ! Le message est envoyé à l'artisan et vous recevrez une réponse sous 48h !"},
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
