import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  addItemInput = '';
  addedItem = '';

  startList = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  allItems = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  router: any;

  ngOnInit() {
    let allItems = this.startList.slice();
  }

  // createItem(info: string) {
  //   this.allItems.push({
  //     info,
  //     completed: false,
  //   });
  // }

  updateItem(id: number) {
    alert('Update ' + id);
    // add a textbox to right side of page
    //
  }

  deleteItem(id: number) {
    // delete allItems[id];
    // this.router.navigate(['/']);
  }

  onSubmit() {
    // console.log(this.todoForm.form.value.addItemInput);
    // this.addedItem = this.todoForm.form.value.addItemInput;
    // this.allItems.push({
    //   this.addedItem,
    //   completed: false,
    // });
  }
}
