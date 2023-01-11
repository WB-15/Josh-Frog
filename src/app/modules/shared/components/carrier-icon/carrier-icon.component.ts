import { Component, Input, OnInit } from '@angular/core';
import { faFedex, faUsps, faUps } from '@fortawesome/free-brands-svg-icons';
import {
  faShippingFast,
  faTruckMoving
} from '@fortawesome/pro-duotone-svg-icons';
import { Carrier } from '../../../../../generated/graphql';

@Component({
  selector: 'app-carrier-icon',
  templateUrl: './carrier-icon.component.html',
  styles: []
})
export class CarrierIconComponent implements OnInit {
  faFedex = faFedex;
  faUps = faUps;
  faUsps = faUsps;
  faShippingFast = faShippingFast;
  faTruckMoving = faTruckMoving;

  @Input() carrier: Carrier;

  constructor() {}

  ngOnInit() {}
}
