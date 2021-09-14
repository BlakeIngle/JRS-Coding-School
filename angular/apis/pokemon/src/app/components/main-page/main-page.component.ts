import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  pokemonResults: string[];
  selectedPokemon: string;
  searchQuery: string;

  constructor(private pokemonAPIService: PokemonAPIService) { }

  ngOnInit(): void {
    this.pokemonResults = [];
  }

  queryChanged(evt) {
    this.pokemonAPIService.getType(evt)
      .subscribe(
        data => {
          var mappedArr = (data as any).pokemon.map(pok => { return pok.pokemon.name });
          this.pokemonResults = mappedArr
        }, error => {
          this.pokemonResults = [];
        }
      );
  }

  onSelectPokemon(name: string) {
    this.selectedPokemon = name;
  }

}
