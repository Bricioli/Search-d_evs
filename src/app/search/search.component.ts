import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatSlideToggleModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})


export class SearchComponent {
  public perfil: String | undefined;
  public resultPerfil: any;
  public resultPerfilRepos: any;
  private readonly url : string = "https://api.github.com/users/"



  constructor(private httpClient: HttpClient){}


  search() {
    console.log(this.perfil)  // valor inserido no input
    
    this.resultSearch()
  }

  resultSearch() {
    this.httpClient.get(`${this.url}${this.perfil}`).subscribe(res => {
      this.resultPerfil = res;
      console.log(this.resultPerfil)
    });
    this.httpClient.get(`${this.url}${this.perfil}/repos`).subscribe(res => {
      this.resultPerfil = res;
      console.log(this.resultPerfil)
    });
  }
}
