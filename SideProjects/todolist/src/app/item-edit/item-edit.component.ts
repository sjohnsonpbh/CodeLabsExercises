import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent {
  @Input() info: Item;
  @Output() close = new EventEmitter<void>();

  onUpdate() {
    // update the item.info property

    // close the page
    this.close.emit();
  }

  onClose() {}
}
