import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() myPostsEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
