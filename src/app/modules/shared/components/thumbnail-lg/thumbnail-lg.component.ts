import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-lg',
  templateUrl: './thumbnail-lg.component.html',
  styles: []
})
export class ThumbnailLgComponent implements OnInit {
  @Input() alt: string;
  @Input() src: string;

  constructor() {}

  ngOnInit(): void {}
}
