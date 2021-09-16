import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const { CapacitorMettlerToledo } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  private lastScaleDataEvent: ScaleDataEvent;
  private scaleDataSubject$ = new BehaviorSubject<ScaleDataEvent>(
    this.lastScaleDataEvent
  );
  public scaleData$ = this.scaleDataSubject$.asObservable();

  private loopTimer: number;
  private windowRef: Window;

  constructor(@Inject(DOCUMENT) private document: Document, private platform: Platform) {
    this.windowRef = this.document.defaultView;
    if (platform.is('electron')) {
      CapacitorMettlerToledo.start();
      this.loop();
    }
  }

  loop(): void {
    this.windowRef.clearTimeout(this.loopTimer);
    // This loop only runs on Windows/Electron
    // there isn't a clean way to callback from NAN
    const d = CapacitorMettlerToledo.check();
    if (d.success) {
      const scaleDataEvent = new ScaleDataEvent();
      scaleDataEvent.stable = d.stable;
      scaleDataEvent.weight = d.weight;

      this.scaleDataSubject$.next(scaleDataEvent);
    }
    this.loopTimer = this.windowRef.setTimeout(() => {
      this.loop();
    }, 100);
  }
}

export class ScaleDataEvent {
  public stable: boolean;
  public weight: number;
}
