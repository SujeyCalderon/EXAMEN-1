import { Component } from '@angular/core';
import { PokeListComponent } from "../../components/poke-list/poke-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
