import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-md',
  templateUrl: './thumbnail-md.component.html',
  styles: []
})
export class ThumbnailMdComponent implements OnInit {
  @Input() alt: string;
  @Input() src: string;

  constructor() {}

  ngOnInit(): void {}
}
