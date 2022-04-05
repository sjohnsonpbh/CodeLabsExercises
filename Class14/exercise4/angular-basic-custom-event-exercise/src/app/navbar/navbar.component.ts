import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<{ searchEmitter: string }>();
  constructor() {}

  ngOnInit(): void {}

  onSearchClick() {
    this.searchEmitter.emit(mySearch);
  }
}
