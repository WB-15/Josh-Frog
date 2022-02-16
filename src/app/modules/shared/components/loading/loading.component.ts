import { Component, Input, OnInit } from '@angular/core';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent implements OnInit {
  faSpinnerThird = faSpinnerThird;
  @Input() message = 'Please wait...';

  constructor() {}

  ngOnInit() {}
}
