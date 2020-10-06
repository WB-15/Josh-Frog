import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-sm',
  templateUrl: './thumbnail-sm.component.html',
  styles: []
})
export class ThumbnailSmComponent implements OnInit {
  @Input() alt: string;
  @Input() src: string;

  constructor() {}

  ngOnInit(): void {}
}
