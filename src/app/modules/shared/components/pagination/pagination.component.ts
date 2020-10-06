import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: []
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() count: number;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changePage(index: number) {
    this.pageChanged.emit(Math.floor(index));
  }
}
