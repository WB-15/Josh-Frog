import { Component, Input, OnInit } from '@angular/core';
import { ShipmentEntity } from '../../../../../generated/graphql';

@Component({
  selector: 'app-shipment-contents',
  templateUrl: './shipment-contents.component.html',
  styles: []
})
export class ShipmentContentsComponent implements OnInit {
  @Input() shipment: ShipmentEntity;

  constructor() {}

  ngOnInit() {}
}
