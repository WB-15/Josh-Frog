import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Platform } from '@ionic/angular';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

import {
  faHome,
  faImagePolaroid,
  faTruckLoading,
  faInventory,
  faHandReceiving,
  faTags,
  faPlusCircle
} from '@fortawesome/pro-duotone-svg-icons';

import { UserService } from './modules/shared/services/user.service';
import { UserEntity } from '../generated/graphql';
import {
  BarcodeService,
  BarcodeScannerEvent
} from './modules/shared/services/barcode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  faHome = faHome;
  faImagePolaroid = faImagePolaroid;
  faHandReceiving = faHandReceiving;
  faInventory = faInventory;
  faTruckLoading = faTruckLoading;
  faTags = faTags;
  faPlusCircle = faPlusCircle;

  public menuShown = false;

  user: UserEntity;
  userChangedSubscription: Subscription;

  barcodeScanners: BarcodeScannerEvent[] = [];
  barcodeScannersChangedSubscription: Subscription;

  public menuItems = [
    {
      icon: faHome,
      name: 'Home',
      route: 'home'
    },
    {
      icon: faImagePolaroid,
      name: 'Catalog',
      route: 'catalog'
    },
    {
      icon: faHandReceiving,
      name: 'Receiving',
      route: 'receiving'
    },
    {
      icon: faInventory,
      name: 'Inventory',
      route: 'inventory'
    },
    {
      icon: faTruckLoading,
      name: 'Shipping',
      route: 'shipping'
    },
    {
      icon: faTags,
      name: 'Plant Labels',
      route: 'plant_labels'
    }
    /*
    {
      icon: faPlusCircle,
      name: 'Add Products',
      route: 'Add Products'
    }
    */
  ];

  constructor(
    private platform: Platform,
    private userService: UserService,
    private barcodeService: BarcodeService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (platform.is('capacitor')) {
      this.platform.ready().then(() => {
        StatusBar.setStyle({ style: StatusBarStyle.Light });
        SplashScreen.hide();
      });
    }
  }

  ngOnInit() {
    this.userChangedSubscription = this.userService.userChanged$.subscribe(
      (user) => {
        this.user = user;
        this.changeDetectorRef.detectChanges();
      }
    );

    this.barcodeScannersChangedSubscription = this.barcodeService.barcodeScannersChanged$.subscribe(
      (barcodeScanners) => {
        this.barcodeScanners = barcodeScanners;
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.userChangedSubscription.unsubscribe();
    this.barcodeScannersChangedSubscription.unsubscribe();
  }

  showMenu() {
    this.menuShown = true;
  }

  hideMenu() {
    this.menuShown = false;
  }
}
