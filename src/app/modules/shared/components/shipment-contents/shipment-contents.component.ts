import { Component, Input, OnInit } from '@angular/core';
import { Packaging, ShipmentEntity } from '../../../../../generated/graphql';
import { SplitShipmentComponent } from '../../../shipping/dialogs/split-shipment/split-shipment.component';
import { DialogService } from '../../services/dialog.service';
import { DialogBoxOptions } from '../dialog/dialog.component';

@Component({
  selector: 'app-shipment-contents',
  templateUrl: './shipment-contents.component.html',
  styles: []
})
export class ShipmentContentsComponent implements OnInit {
  @Input() shipment: ShipmentEntity;

  constructor(
    private dialogService: DialogService,
  ) {}

  ngOnInit() {}
  splitShipment() {
    const options = new DialogBoxOptions();
    options.component = SplitShipmentComponent;
    options.inputs = {
      shipment: this.shipment,
    };
    options.title = 'Split shipment';
    options.okText = 'Done';
    this.dialogService.showDialog(options);
  }
}
