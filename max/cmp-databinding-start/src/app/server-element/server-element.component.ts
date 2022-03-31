// remember me -  encapsulation: ViewEncapsulation.None
//- on line 11, this removed the weird style names in the html
// for this component, just uses normal <div> and <p> tags -

import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Shadowdom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // remember me - binding a child element to it's parent
  // here it is binding to the element, we add @Input() to expose it - this is binding to custom properties
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  ngonDestroy() {
    console.log('ngOnDestroy called');
  }
}
