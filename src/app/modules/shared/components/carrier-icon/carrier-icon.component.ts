import { Component, Input, OnInit } from '@angular/core';
import { faFedex } from '@fortawesome/free-brands-svg-icons/faFedex';
import { faUsps, faUps } from '@fortawesome/free-brands-svg-icons';
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

  @Input() carrier: Carrier;

  constructor() {}

  ngOnInit() {}
}
