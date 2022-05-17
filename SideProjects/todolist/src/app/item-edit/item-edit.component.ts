import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent {
  @Input() info: Item;
  @Output() close = new EventEmitter<void>();

  changedText: string;

  onUpdate(form: NgForm) {
    console.log(form);
    // update the item.info property
    // this.info = taskForm.info;
    // // close the page
    // this.close.emit();
  }

  onClose() {
    // if info has been changed, revert to old value.
  }
}
