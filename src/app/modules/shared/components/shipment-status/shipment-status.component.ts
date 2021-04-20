import { Component, Input, OnInit } from '@angular/core';

import { ShipmentStatus } from '../../../../../generated/graphql';

@Component({
  selector: 'app-shipment-status',
  templateUrl: './shipment-status.component.html',
  styles: []
})
export class ShipmentStatusComponent implements OnInit {
  @Input() shipmentStatus: ShipmentStatus;

  constructor() {}

  ngOnInit(): void {}
}
