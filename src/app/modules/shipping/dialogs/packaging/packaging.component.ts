import { Component, Input, OnInit } from '@angular/core';
import { Carrier, Packaging, Service } from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styles: [],
})
export class PackagingComponent implements OnInit {

  @Input() parentRef: DialogComponent<PackagingComponent>;
  @Input() callback: (
    packaging: Packaging
  ) => void;

  packagings: Packaging[] = [ Packaging.CardboardBox, Packaging.PolyBag_12X15 ];

  constructor() { }

  ngOnInit() {}

  pickPackaging(
    packaging: Packaging
  ) {
    if (this.callback) {
      this.callback(packaging);
    }
    this.parentRef.pressOK();
  }
}
