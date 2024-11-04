import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PokeListComponent } from './app/components/poke-list/poke-list.component';
import { PokeDetailsComponent } from './app/components/poke-details/poke-details.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PokeListComponent },
  { path: 'pokemon/:name', component: PokeDetailsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()  // This enables HttpClient globally
  ]
}).catch(err => console.error(err));
