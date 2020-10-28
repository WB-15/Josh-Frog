import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  faExclamationCircle,
  faInfoCircle
} from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styles: []
})
export class MessageBoxComponent implements OnInit {
  faExclamationCircle = faExclamationCircle;
  faInfoCircle = faInfoCircle;

  @Input() options = new MessageBoxOptions();
  @Output() okPressed = new EventEmitter<void>();
  @Output() cancelPressed = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  pressOK() {
    this.okPressed.emit();
  }

  pressCancel() {
    this.cancelPressed.emit();
  }
}

export class MessageBoxOptions {
  active = true;
  severity = 'I';
  title = '';
  message = '';
  okText = 'OK';
  cancelText = 'Cancel';
}
