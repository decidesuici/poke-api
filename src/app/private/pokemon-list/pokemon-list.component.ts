import { Component, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public http: HttpClient
  ) { }
  pokemons: Pokemon[] = [];
  displayPokemons: Pokemon[] = [];

  ngOnInit(): void {
    for(let i = 1; i <= 151; i++){
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe(data => {
        this.pokemons.push(data);
        if(i <= 9){
          this.displayPokemons.push(data);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => this.updateDisplayedItems());
  }

  onPageChange(event: any) {
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.displayPokemons = this.pokemons.slice(startIndex, endIndex);
  }
}
