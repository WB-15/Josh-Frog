import { Pipe, PipeTransform } from '@angular/core';
import { Packaging } from '../../../../generated/graphql';

@Pipe({
  name: 'packaging'
})
export class PackagingPipe implements PipeTransform {
  transform(value: Packaging, ...args: unknown[]): string {
    switch (value) {
      case Packaging.CardboardBox:
        return 'Cardboard Box';
      case Packaging.RegionalBoxA:
        return 'Regional Box A';
      case Packaging.RegionalBoxB:
        return 'Regional Box B';
      case Packaging.FlatRateEnvelope:
        return 'Flat Rate Envelope';
      case Packaging.PolyBag_12X15:
        return 'Poly Bag';
      case Packaging.FedexEnvelope:
        return 'Fedex Envelope';
      default:
        return value;
    }
  }
}
