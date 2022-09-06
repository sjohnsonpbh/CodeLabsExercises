import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  startList = [
    { info: 'wake up', completed: true },
    { info: 'cook', completed: false },
    { info: 'walk', completed: false },
    { info: 'push-ups', completed: false },
    { info: 'nap', completed: false },
  ];

  // allItems = [];

  itemSubject = new Subject<string>();

  constructor() {}
  initialText: string;

  bIsUpdating = false;
  clickedItem: Item;
  clickedIdx: number;

  updateItem(item: Item, idx: number) {
    this.bIsUpdating = true;
    // alert('Update ' + id);
    // passing the item object
    this.clickedItem = item;
    // this.itemSubject.next(item.info);
    this.initialText = item.info;
    this.startList[this.clickedIdx] = item;
    console.log('item', item);
    console.log('startList', this.startList);
  }

  deleteItem(idx: number) {
    this.startList.splice(idx, 1);
    console.log(this.startList);
  }
}
