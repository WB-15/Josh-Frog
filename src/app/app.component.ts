import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Platform } from '@ionic/angular';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

import {
  faHome,
  faImagePolaroid,
  faRulerVertical,
  faHandReceiving,
  faInventory,
  faTruckLoading,
  faCreditCard,
  faPrint,
  faTags,
  faPlusCircle,
  faClock,
  faWarehouse,
  faSunCloud,
  faClipboardListCheck
} from '@fortawesome/pro-duotone-svg-icons';

import { DialogBoxOptions } from './modules/shared/components/dialog/dialog.component';
import { DialogService } from './modules/shared/services/dialog.service';
import { UserService } from './modules/shared/services/user.service';
import { WarehouseService } from './modules/shared/services/warehouse.service';
import { WarehouseComponent } from './modules/settings/dialogs/warehouse/warehouse.component';
import { UserEntity, WarehouseEntity } from '../generated/graphql';
import {
  BarcodeService,
  BarcodeScannerEvent
} from './modules/shared/services/barcode.service';
import { AutoprintService } from './modules/shared/services/autoprint.service';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  faHome = faHome;
  faImagePolaroid = faImagePolaroid;
  faRulerVertical = faRulerVertical;
  faHandReceiving = faHandReceiving;
  faInventory = faInventory;
  faTruckLoading = faTruckLoading;
  faPrint = faPrint;
  faTags = faTags;
  faClock = faClock;
  faWarehouse = faWarehouse;
  faPlusCircle = faPlusCircle;
  faCreditCard = faCreditCard;
  faSunCloud = faSunCloud;
  faClipboardListCheck = faClipboardListCheck;

  public menuShown = false;

  user: UserEntity;
  userChangedSubscription: Subscription;

  warehouse: WarehouseEntity;
  warehouseChangedSubscription: Subscription;

  barcodeScanners: BarcodeScannerEvent[] = [];
  barcodeScannersChangedSubscription: Subscription;

  public availableMenuItems: MenuItem[] = [];

  public allMenuItems: MenuItem[] = [
    {
      icon: faHome,
      name: 'Home',
      route: 'home',
      platform: null
    },
    {
      icon: faImagePolaroid,
      name: 'Catalog',
      route: 'catalog',
      platform: null
    },
    {
      icon: faRulerVertical,
      name: 'Making',
      route: 'making',
      platform: null
    },
    {
      icon: faHandReceiving,
      name: 'Receiving',
      route: 'receiving',
      platform: null
    },
    {
      icon: faInventory,
      name: 'Inventory',
      route: 'inventory',
      platform: null
    },
    {
      icon: faTruckLoading,
      name: 'Shipping',
      route: 'shipping',
      platform: 'electron'
    },
    {
      icon: faSunCloud,
      name: 'Weather',
      route: 'weather',
      platform: null
    },
    {
      icon: faPrint,
      name: 'AutoPrint',
      route: 'auto_print',
      platform: 'electron'
    },
    {
      icon: faTags,
      name: 'Plant Labels',
      route: 'plant_labels',
      platform: 'capacitor'
    },
    {
      icon: faClipboardListCheck,
      name: 'Prepping',
      route: 'prepping',
      platform: null
    },
    {
      icon: faCreditCard,
      name: 'Purchase Orders',
      route: 'purchase-orders',
      platform: null
    },
    {
      icon: faClock,
      name: 'Time Clock',
      route: 'time_clock',
      platform: null
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
    private dialogService: DialogService,
    private userService: UserService,
    private warehouseService: WarehouseService,
    private barcodeService: BarcodeService,
    private autoprintService: AutoprintService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (platform.is('capacitor')) {
      this.platform.ready().then(() => {
        StatusBar.setStyle({ style: StatusBarStyle.Light });
        SplashScreen.hide();
      });
    }
    this.availableMenuItems = [];

    if (platform.is('electron') || platform.is('capacitor')) {
      for (const item of this.allMenuItems) {
        if (item.platform == null || platform.is(item.platform)) {
          this.availableMenuItems = this.availableMenuItems.concat(item);
        }
      }
    } else {
      this.availableMenuItems = this.allMenuItems;
    }
  }

  ngOnInit() {
    this.userChangedSubscription = this.userService.userChanged$.subscribe(
      (user) => {
        this.user = user;
        this.changeDetectorRef.detectChanges();
      }
    );

    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;
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

  showWarehouseDialog() {
    const options = new DialogBoxOptions();
    options.component = WarehouseComponent;
    options.inputs = {};
    options.title = 'Select Warehouse';
    this.dialogService.showDialog(options);
  }

  ngOnDestroy() {
    this.userChangedSubscription.unsubscribe();
    this.warehouseChangedSubscription.unsubscribe();
    this.barcodeScannersChangedSubscription.unsubscribe();
  }

  showMenu() {
    this.menuShown = true;
  }

  hideMenu() {
    this.menuShown = false;
  }
}

export class MenuItem {
  icon: IconDefinition;
  name: string;
  route: string;
  platform:
    | null
    | 'electron'
    | 'capacitor'
    | 'ipad'
    | 'iphone'
    | 'ios'
    | 'android'
    | 'phablet'
    | 'tablet'
    | 'cordova'
    | 'pwa'
    | 'mobile'
    | 'mobileweb'
    | 'desktop'
    | 'hybrid';
}
