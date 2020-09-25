import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { faHome, faInventory, faTags } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  faHome = faHome;
  faInventory = faInventory;
  faTags = faTags;

  public menuShown = false;

  public menuItems = [
    {
      icon: faHome,
      name: 'Home',
      route: 'home'
    }, {
      icon: faInventory,
      name: 'Inventory',
      route: 'inventory'
    }, {
      icon: faTags,
      name: 'Plant Labels',
      route: 'plant_labels'
    }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showMenu() {
    this.menuShown = true;
  }

  hideMenu() {
    this.menuShown = false;
  }

  ngOnInit() { }
}
