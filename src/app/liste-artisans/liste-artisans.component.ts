import { Component, OnInit } from '@angular/core';
import { ArtisansService, Artisans } from '../artisans.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-liste-artisans',
  templateUrl: './liste-artisans.component.html',
  styleUrl: './liste-artisans.component.scss'
})
export class ListeArtisansComponent implements OnInit {
  artisans: Artisans[] = [];
  category: string | null = null;
  filteredArtisans: Artisans[] = [];
  private routeSub: Subscription | null = null;

  constructor(
    private artisansService: ArtisansService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit() : void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      console.log('ngOnInit called');
      this.loadArtisans();
    });
  }

  async loadArtisans(): Promise<void> {
    try {
      const allArtisans = await firstValueFrom(this.artisansService.getAllArtisans());
      if (this.category) {
        this.filteredArtisans = allArtisans.filter(artisan => {
          const artisanCategory = artisan.category?.toLowerCase().trim();
          const selectedCategory = this.category?.toLowerCase().trim();
          const matches = artisanCategory === selectedCategory;
          return matches;
        });
      } else {
        this.filteredArtisans = allArtisans;
      }
    } catch (error) {
      console.error('Erreur', error);
    }
  }

  getStars(note:number): boolean[] {
    return Array(5).fill(false).map((_,i) => i < note);
  }
}
