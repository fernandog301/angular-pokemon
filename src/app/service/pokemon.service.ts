import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Injecting HttpClient as a dependency
  // HttpClient is a class that allows us to perform http request

  http = inject(HttpClient)
  
  getPokemon(userInput = "bulbasaur") { 
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`)
  }
}
