import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @Output() user:{ id: number; username: string } = {
   {0;  "scottjo"}
   {1; "sj"}

 }
}
