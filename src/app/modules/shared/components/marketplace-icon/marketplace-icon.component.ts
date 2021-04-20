import { Component, Input, OnInit } from '@angular/core';

import { faMagento, faAmazon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-marketplace-icon',
  templateUrl: './marketplace-icon.component.html',
  styles: []
})
export class MarketplaceIconComponent implements OnInit {
  faMagento = faMagento;
  faAmazon = faAmazon;

  @Input() cls: string;

  constructor() {}

  ngOnInit(): void {}
}
