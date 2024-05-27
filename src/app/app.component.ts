import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./components/search/search.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SearchComponent, PerfilComponent]
})
export class AppComponent {
  title = 'search-d_evs';

}
