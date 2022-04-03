import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() foodEmitter = new EventEmitter();
  @Input() food: string;

  constructor() {}

  ngOnInit(): void {}

  onSendFood(food: string) {
    this.foodEmitter.emit(food);
  }
}
