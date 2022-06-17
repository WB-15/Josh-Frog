import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  _pageSize: number;
  @Input() set pageSize(pageSize: number) {
    this._pageSize = pageSize;
    this.calculatePageCount();
  }

  _count: number;
  @Input() set count(count: number) {
    this._count = count;
    this.calculatePageCount();
  }

  _pageOffset = 2;
  @Input() set pageOffset(pageOffset: number) {
    this._pageOffset = pageOffset;
    this.pageOffsetButtons = new Array(pageOffset);
  }

  @Input() page: number;

  @Output() pageChanged = new EventEmitter<number>();

  isBrowser = isPlatformBrowser(this.platformId);
  pageCount: number;
  math = Math;
  pageOffsetButtons = new Array(2);
  widthResizeSubscription: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (this.isBrowser) {
      this.setPageOffset();
      this.widthResizeSubscription = fromEvent(window, 'resize')
        .pipe(throttleTime(200, undefined, { trailing: true }))
        .subscribe((event) => {
          this.setPageOffset();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.widthResizeSubscription.unsubscribe();
    }
  }

  setPageOffset() {
    const newWidth = window.innerWidth;
    if (newWidth < 1024 && this._pageOffset !== 1) {
      this.pageOffset = 1;
    }

    if (newWidth >= 1024 && this._pageOffset < 2) {
      this.pageOffset = 2;
    }
  }

  changePage(index: number) {
    const newPage = Math.floor(index);
    if (newPage !== this.page) {
      this.pageChanged.emit(newPage);
    }
  }

  calculatePageCount() {
    if (this._pageSize && this._count) {
      this.pageCount = Math.ceil(this._count / this._pageSize);
    } else {
      this.pageCount = 1;
    }
  }
}
