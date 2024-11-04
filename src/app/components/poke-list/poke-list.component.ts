import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/poke-service.service';
import { Router } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule 
  ]
})
export class PokeListComponent implements OnInit {
  pokemonList: any[] = [];
  favorites: Set<string> = new Set();

  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
    });
  }

  toggleFavorite(name: string): void {
    if (this.favorites.has(name)) {
      this.favorites.delete(name);
    } else {
      this.favorites.add(name);
    }
  }

  viewDetails(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }
}
