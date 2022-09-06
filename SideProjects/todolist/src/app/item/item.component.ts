import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item.service';
import { Item } from '../item.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private router: Router,
    private authService: AuthService
  ) {}

  @ViewChild('todoForm', { static: false }) todoForm: NgForm;

  addedItem = '';
  allItems = [];

  bIsUpdating = false;
  clickedItem: Item;
  isLoggedIn: boolean;

  ngOnInit() {
    this.allItems = this.itemService.startList.slice();
    this.authService.currUser.subscribe((user) => {
      this.isLoggedIn = !!user;
      // console.log('item component logged in' + !!user);
    });
  }

  onSubmit() {
    // console.log(this.todoForm.form.value.addItemInput);
    this.addedItem = this.todoForm.form.value.addItemInput;
    this.itemService.startList.push({
      // remember me - left side is name of the object field, second is value
      info: this.addedItem,
      completed: false,
    });
    this.allItems.push({
      // remember me - left side is name of the object field, second is value
      info: this.addedItem,
      completed: false,
    });
    this.todoForm.resetForm();
    console.log(this.allItems);
  }

  updateItem(item: Item, idx: number) {
    this.bIsUpdating = true;
    // alert('Update ' + idx);
    // passing the item object
    this.clickedItem = item;
    this.itemService.clickedItem = item;
    this.itemService.clickedIdx = idx;
    // this.itemService.itemSubject.next(item.info);
    this.itemService.initialText = item.info;
    console.log(item);
  }

  onDeleteItem(idx: number) {
    this.itemService.deleteItem(idx);
    this.allItems.splice(idx, 1);
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }

  onSignOut() {
    this.authService.signOut();
  }
}
