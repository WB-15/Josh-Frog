import { Injectable } from '@angular/core';
import * as es6printJS from 'print-js';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  constructor() {}

  print() {
    es6printJS('test', 'html');
  }
}
