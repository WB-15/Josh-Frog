import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type
} from '@angular/core';
import {
  MessageBoxComponent,
  MessageBoxOptions
} from '../components/message-box/message-box.component';
import {
  DialogBoxOptions,
  DialogComponent
} from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  componentRef: any = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  showErrorMessageBox(error: any) {
    const messageBoxOptions = new MessageBoxOptions();
    messageBoxOptions.title = 'Error';
    if (error.message) {
      messageBoxOptions.message = error.message;
    } else {
      messageBoxOptions.message = JSON.stringify(error);
    }
    messageBoxOptions.okText = 'OK';
    this.showMessageBox(messageBoxOptions, () => {});
  }

  showMessageBox(
    options: MessageBoxOptions,
    okPressed?: () => void,
    cancelPressed?: () => void
  ) {
    this.hideDialog();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      MessageBoxComponent
    );
    this.componentRef = factory.create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    this.componentRef.instance.options = options;

    this.componentRef.instance.okPressed.subscribe(() => {
      this.hideDialog();
      if (okPressed) {
        okPressed();
      }
    });

    this.componentRef.instance.cancelPressed.subscribe(() => {
      this.hideDialog();
      if (cancelPressed) {
        cancelPressed();
      }
    });

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  showDialog<T>(options: DialogBoxOptions, okPressed?: () => void): any {
    this.hideDialog();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      DialogComponent
    );
    this.componentRef = factory.create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    this.componentRef.instance.options = options;

    this.componentRef.instance.okPressed.subscribe(() => {
      this.hideDialog();
      if (okPressed) {
        okPressed();
      }
    });

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return this.componentRef;
  }

  hideDialog() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}
