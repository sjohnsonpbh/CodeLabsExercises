import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string; // remember me - property binding to
  // send error = message

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
