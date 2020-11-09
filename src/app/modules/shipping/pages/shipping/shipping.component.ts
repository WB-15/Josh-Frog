import { Component, OnInit } from '@angular/core';
import { ScaleService } from '../../../shared/services/scale.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: []
})
export class ShippingComponent implements OnInit {
  constructor(private scaleService: ScaleService) {}

  ngOnInit() {}
}
