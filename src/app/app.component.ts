import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './component/pokemon/pokemon.component';

// The @Component Decorator marks this file as a component 
@Component({
  // The component tag name, <app-root></app-root>
  selector: 'app-root',

  // Marking a component as standalone, makes it so that it handles it's own dependency's
  standalone: true,

  //This is where we add out imports and dependency's
  imports: [RouterOutlet, PokemonComponent],


  // this file path to the template and stylesheet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fernando';
}
