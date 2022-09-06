import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent implements OnInit {
  @Input() info: Item;
  @Output() close = new EventEmitter<void>();

  constructor(private itemService: ItemService) {}
  clickedIdx: number;

  ngOnInit(): void {
    this.pristineText = this.itemService.initialText;
    this.clickedItem = this.itemService.clickedItem;
    this.clickedIdx = this.itemService.clickedIdx;
    console.log('ngOnInit - pristineText -' + this.pristineText);
    this.itemService.itemSubject.subscribe((itemValue) => {
      this.pristineText = itemValue;
      console.log('ngOnInit -item-editcomponent-' + this.pristineText);
    });
  }
  pristineText: string;
  clickedItem: Item;

  onUpdate(form: NgForm) {
    console.log(this.pristineText);
    console.log(form.value);
    // console.log(this.pristineText);

    if (this.pristineText === this.info.info) {
      // item data did not change, just close window
      this.close.emit();
    } else {
      // update this object array using the index
      this.clickedItem.info = form.value.info;
      console.log(this.clickedItem);
      console.log(form.value);
      // update the item component, subscribe so it is
      // aware of changes
      this.itemService.updateItem(this.clickedItem, this.clickedIdx);
      console.log(this.pristineText);
      // close window
      this.close.emit();
    }

    // configure text area
    //

    // subscribe to a subject to determine if value has changed

    // update the item.info property
    // this.info = taskForm.info;
    // // close the page
    // this.close.emit();
  }

  onClose() {
    // if info has been changed, revert to old value.
    this.close.emit();
  }
}
