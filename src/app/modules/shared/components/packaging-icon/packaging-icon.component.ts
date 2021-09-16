import { Component, Input, OnInit } from '@angular/core';
import { Packaging } from '../../../../../generated/graphql';
import { faBox, faSack } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-packaging-icon',
  templateUrl: './packaging-icon.component.html',
  styles: [],
})
export class PackagingIconComponent implements OnInit {
  faBox = faBox;
  faSack = faSack;

  @Input() packaging: Packaging;

  constructor() {}

  ngOnInit() {}
}

