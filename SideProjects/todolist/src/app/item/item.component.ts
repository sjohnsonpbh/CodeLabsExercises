import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  constructor(private itemService: ItemService, private router: Router) {}

  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  addedItem = '';
  allItems = [];
  // todoForm: any;
  bIsUpdating = false;
  clickedItem: Item;

  ngOnInit() {
    this.allItems = this.itemService.startList.slice();
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

  deleteItem(id: number) {
    this.allItems.splice(id, 1);
  }

  updateItem(item: Item) {
    this.bIsUpdating = true;
    // alert('Update ' + id);
    // passing the item object
    this.clickedItem = item;
    this.itemService.itemSubject.next(item.info);
    this.itemService.initialText = item.info;
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }
}
