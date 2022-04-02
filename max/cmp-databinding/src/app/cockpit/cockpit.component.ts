import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
// remember me -  Binding to Custom Events
// using EventEmitter and @Output to bind the clicks in App Component to
// the cockpit, where we have the onAddServer and onAddBlueprint functions
// app component has this:
//  <app-cockpit
//     (serverCreated)="onServerAdded($event)"
//     (bpCreated)="onBlueprintAdded($event)"
//   ></app-cockpit>
// we are emitting our own events and passing data
// using the decorator @Output, we are passing our event out of the component
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // remember me - using @ViewChild() to pass an argument as a string,
  // the name of the local reference. We can also get access to the value,
  // by using ElementRef (which is imported from angular) and the
  // nativeElement.value property
  @ViewChild('serverContentInput', { static: false })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
