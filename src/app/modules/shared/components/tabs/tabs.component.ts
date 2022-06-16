import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: []
})
export class TabsComponent implements OnInit {
  @Input() titles: string[];
  @Input() index = 0;

  @Output() valueChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  change(index: number) {
    this.index = index;
    this.valueChanged.emit(index);
  }
}
