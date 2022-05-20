import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent implements OnInit {
  @Input() info: Item;
  @Output() close = new EventEmitter<void>();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.pristineText = this.itemService.initialText;
    console.log('pristineText -' + this.pristineText);
    this.itemService.itemSubject.subscribe((itemValue) => {
      this.pristineText = itemValue;
      console.log(this.pristineText);
    });
  }
  pristineText: string;

  onUpdate(form: NgForm) {
    console.log(this.pristineText);
    // console.log(this.pristineText);

    if (this.pristineText === this.info.info) {
      // item data did not change, just close window
      this.close.emit();
    } else {
      //
      console.log(this.pristineText);
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
  }
}
