import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() users: { username: string; id: number }[] = [
    { id: 0, username: 'scottjo' },
    { id: 1, username: 'sj' },
  ];
}
