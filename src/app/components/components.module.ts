import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from './material/material.module';

// Components
import { PokeCardComponent } from './poke-card/poke-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

let components = [
  PokeCardComponent,
  NavBarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
