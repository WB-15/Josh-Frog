import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { CapacitorMettlerToledo } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  constructor(private platform: Platform) {
    console.log('constructor');
    if (platform.is('electron')) {
      CapacitorMettlerToledo.echo({
        value: 'Hello from web!'
      });
    }
  }
}
