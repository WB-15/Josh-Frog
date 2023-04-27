import { Component, Input, OnInit } from '@angular/core';

import { faMagento, faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import { faDotCircle } from '@fortawesome/pro-duotone-svg-icons';
import { faGlobeAmericas, faPhone, faHistory, faBoxFragile } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-marketplace-icon',
  templateUrl: './marketplace-icon.component.html',
  styles: []
})
export class MarketplaceIconComponent implements OnInit {
  faGlobeAmericas = faGlobeAmericas;
  faPhone = faPhone;
  faHistory = faHistory;
  faMagento = faMagento;
  faAmazon = faAmazon;
  faEbay = faEbay;
  faDotCircle = faDotCircle;
  faBoxFragile = faBoxFragile;

  @Input() cls: string;

  constructor() {}

  ngOnInit(): void {}
}
