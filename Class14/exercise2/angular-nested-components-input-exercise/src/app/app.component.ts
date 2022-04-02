import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() myPosts: string[] = ['post1', 'post2', 'post3', 'post4', 'post5'];
}
