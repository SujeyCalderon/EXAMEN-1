import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/poke-service.service';
import { CommonModule } from '@angular/common';
import { CustomFormatPipe } from '../../custom-format.pipe';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomFormatPipe] //Pipe
})
export class PokeDetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemonDetails(name).subscribe((data: any) => {
        this.pokemon = data;
      });
    }
  }
}
