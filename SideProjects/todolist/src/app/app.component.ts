import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  addItemInput = '';

  allItems = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  ngOnInit() {}

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

  onSubmit(form: NgForm) {
    console.log(this.todoForm);
    // this.allItems.push({
    //   todoForm.addItemInput,
    //   completed: false,
    // });
  }
}
