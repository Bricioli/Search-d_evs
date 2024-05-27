import { Component } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SearchComponent]
})
export class HomeComponent {
  


}
