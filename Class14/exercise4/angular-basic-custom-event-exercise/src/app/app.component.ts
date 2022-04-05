import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appSearch: string;

  onSearch(search) {
    this.appSearch = search;
  }
}
