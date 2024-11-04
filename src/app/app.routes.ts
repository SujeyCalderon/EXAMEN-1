import { Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokeListComponent },
  { path: 'pokemon/:name', component: PokeDetailsComponent },
];
