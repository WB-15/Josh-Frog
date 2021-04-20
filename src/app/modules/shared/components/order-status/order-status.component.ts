import { Component, Input, OnInit } from '@angular/core';

import { SalesOrderStatus } from '../../../../../generated/graphql';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styles: []
})
export class OrderStatusComponent implements OnInit {
  @Input() salesOrderStatus: SalesOrderStatus;

  constructor() {}

  ngOnInit(): void {}
}
