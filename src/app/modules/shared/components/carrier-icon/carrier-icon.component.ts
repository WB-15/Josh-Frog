import { Component, Input, OnInit } from '@angular/core';
import { faDhl, faFedex, faUps, faUsps } from '@fortawesome/free-brands-svg-icons';
import { faQuestion, faShippingFast, faTruckMoving } from '@fortawesome/pro-duotone-svg-icons';
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
  faDhl = faDhl;
  faQuestion = faQuestion;

  @Input() carrier: Carrier;

  constructor() {}

  ngOnInit() {}
}
