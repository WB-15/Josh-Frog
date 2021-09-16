import { Component, Input, OnInit } from '@angular/core';
import { SimpleProductEntity } from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

import {
  faInventory,
  faChevronCircleRight,
  faTimesCircle
} from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-change-bin',
  templateUrl: './change-bin.component.html',
  styles: []
})
export class ChangeBinComponent implements OnInit {
  faInventory = faInventory;
  faChevronCircleRight = faChevronCircleRight;
  faTimesCircle = faTimesCircle;

  @Input() binEntry = '';
  @Input() simpleProduct: SimpleProductEntity;
  @Input() parentRef: DialogComponent<ChangeBinComponent>;
  @Input() setCallback: (bin: string) => void;
  @Input() clearCallback: () => void;

  constructor() {}

  ngOnInit() {}

  setBin() {
    if (this.setCallback) {
      this.setCallback(this.binEntry);
    }
    this.parentRef.pressOK();
  }

  clearBin() {
    if (this.clearCallback) {
      this.clearCallback();
    }
    this.parentRef.pressOK();
  }
}
