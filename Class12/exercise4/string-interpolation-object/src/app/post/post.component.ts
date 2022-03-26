import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // create a class property called info that is an object with properties: firstName and lastName

  info: { firstName: string; lastName: string };

  @Output() firstName = 'Joe';
  lastName = 'Blow';

  constructor() {}

  ngOnInit(): void {}
}
