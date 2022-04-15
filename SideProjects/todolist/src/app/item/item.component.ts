import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Item } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, Item {
  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new Subject<Item>();

  constructor() {}

  info: string;
  completed: boolean;
  editable = false;

  ngOnInit(): void {}
}
