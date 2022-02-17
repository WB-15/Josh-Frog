import { Component, Input, OnInit } from '@angular/core';

import { faMagento, faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import { faDotCircle, faGlobe, faPhone } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-marketplace-icon',
  templateUrl: './marketplace-icon.component.html',
  styles: []
})
export class MarketplaceIconComponent implements OnInit {
  faGlobe = faGlobe;
  faPhone = faPhone;
  faMagento = faMagento;
  faAmazon = faAmazon;
  faEbay = faEbay;
  faDotCircle = faDotCircle;

  @Input() cls: string;

  constructor() {}

  ngOnInit(): void {}
}
