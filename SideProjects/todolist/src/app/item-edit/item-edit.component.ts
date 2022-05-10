import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent {
  @Input() info: string;
  @Output() close = new EventEmitter<number>();

  onClose() {
    this.close.emit();
  }

  onUpdate() {}
}
