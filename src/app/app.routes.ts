import { Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:name', component: PokeDetailsComponent },
];
