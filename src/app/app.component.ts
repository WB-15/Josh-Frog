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
  faPlusCircle,
  faClock,
  faWarehouse,
  faRulerVertical
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
  faTags = faTags;
  faClock = faClock;
  faWarehouse = faWarehouse;
  faPlusCircle = faPlusCircle;

  public menuShown = false;

  user: UserEntity;
  userChangedSubscription: Subscription;

  warehouse: WarehouseEntity;
  warehouseChangedSubscription: Subscription;

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
      icon: faRulerVertical,
      name: 'Making',
      route: 'making'
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
    },
    {
      icon: faClock,
      name: 'Time Clock',
      route: 'time_clock'
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
