import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  allItems = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  ngOnInit() {
    this.todoForm = new FormGroup({
      addItemInput: new FormControl(null, [Validators.required]),
      completed: new FormControl(null),
    });
  }

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

  onSubmit() {
    this.allItems.push({
      addItemInput,
      completed: false,
    });
  }
}
