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
    this.changedText = this.itemService.initialText;
    console.log(this.changedText);
    this.itemService.itemSubject.subscribe((itemValue) => {
      this.changedText = itemValue;
      console.log(this.changedText);
    });
  }
  changedText: string;

  onUpdate(form: NgForm) {
    console.log(form.value);
    console.log(this.changedText);

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
