import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // create a class property called info that is an object with properties: firstName and lastName
  info: object = { firstName: 'Scott', lastName: 'Johnson' };

  constructor() {}

  ngOnInit(): void {}
}
