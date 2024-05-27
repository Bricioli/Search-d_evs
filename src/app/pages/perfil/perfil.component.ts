import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    imports: [SearchComponent]
})
export class PerfilComponent {

}
