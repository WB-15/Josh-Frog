import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  SimpleProductEntity,
  SimpleProductInfoGQL
} from '../../../../../generated/graphql';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styles: []
})
export class ProductInfoComponent implements OnInit {
  @Input() simpleProduct: SimpleProductEntity;
  @Input() parentRef: DialogComponent<ProductInfoComponent>;

  constructor(
    private router: Router,
    private simpleProductInfo: SimpleProductInfoGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.load(this.simpleProduct.id);
  }

  load(id: string) {
    this.changeDetectorRef.detectChanges();
    this.simpleProductInfo
      .fetch({ id })
      .pipe(map((result) => result.data.simpleProductInfo))
      .subscribe(
        (result) => {
          this.simpleProduct = result as SimpleProductEntity;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          console.error(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  routeInventory() {
    const queryParams = { id: this.simpleProduct.id };
    this.router.navigate(['/inventory'], { queryParams });
    this.parentRef.pressOK();
  }

  routeReceiving() {
    const queryParams = { id: this.simpleProduct.id };
    this.router.navigate(['/receiving'], { queryParams });
    this.parentRef.pressOK();
  }
}
