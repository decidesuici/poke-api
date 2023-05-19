import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    sprites: {}
  }

  shiny: boolean = false;
  
  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  seeShiny(){
    setTimeout(() => {
      this.shiny = !this.shiny;
    }, 100);
  }
}
