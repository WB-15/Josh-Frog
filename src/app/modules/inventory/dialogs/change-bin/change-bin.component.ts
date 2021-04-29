import { Component, Input, OnInit } from '@angular/core';
import { SimpleProductEntity } from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

import {
  faInventory,
  faChevronCircleRight
} from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-change-bin',
  templateUrl: './change-bin.component.html',
  styles: []
})
export class ChangeBinComponent implements OnInit {
  faInventory = faInventory;
  faChevronCircleRight = faChevronCircleRight;

  @Input() binEntry = '';
  @Input() simpleProduct: SimpleProductEntity;
  @Input() parentRef: DialogComponent<ChangeBinComponent>;
  @Input() callback: (bin: string) => void;

  constructor() {}

  ngOnInit() {}

  setBin() {
    if (this.callback) {
      this.callback(this.binEntry);
    }
    this.parentRef.pressOK();
  }
}
