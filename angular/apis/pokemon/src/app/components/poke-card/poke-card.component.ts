import { Component, Input, OnInit } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemonName: string;

  pokemon: any;

  constructor(private pokeService: PokemonAPIService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.loadPokemon(this.pokemonName)
  }

  loadNeighbor(offset: number) {
    this.loadPokemon(this.pokemon.id + offset)
  }

  loadPokemon(pokemon: string) {
    this.pokeService.getPokemon(pokemon)
      .subscribe(
        data => {
          console.log(data)
          this.pokemon = data;
        },
        error => {
          this.pokemon = null;
          // console.error(error);
        }
      );
  }

}