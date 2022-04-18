import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To do list!';

  allItems = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  createItem(info: string) {
    this.allItems.push({
      info,
      completed: false,
    });
  }

  updateItem(id: number) {
    alert('Update ' + id);
  }
  deleteItem(id: number) {
    alert('Delete ' + id);
  }
}
