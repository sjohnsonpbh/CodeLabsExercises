import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from './item.model';
import { Router } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService],
})
export class AppComponent implements OnInit {
  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  constructor(private itemService: ItemService) {}

  addItemInput = '';
  addedItem = '';
  bIsUpdating = false;
  clickedItem: Item;

  startList = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  allItems = [];

  router: any;

  ngOnInit() {
    this.allItems = this.startList.slice();
  }

  // createItem(info: string) {
  //   this.allItems.push({
  //     info,
  //     completed: false,
  //   });
  // }

  updateItem(item: Item) {
    this.bIsUpdating = true;
    // alert('Update ' + id);
    // passing the item object
    this.clickedItem = item;
  }

  deleteItem(id: number) {
    this.allItems.splice(id, 1);
  }

  onSubmit() {
    // console.log(this.todoForm.form.value.addItemInput);
    this.addedItem = this.todoForm.form.value.addItemInput;
    this.allItems.push({
      // remember me - left side is name of the object field, second is value
      info: this.addedItem,
      completed: false,
    });
    this.todoForm.resetForm();
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }
}
